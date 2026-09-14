# AGENTS.md - Food Justice Research Engineering Guide

This document contains architectural context, infrastructure configuration, performance findings, and operational guidelines for agents working on the `food-justice-research` repository.

---

## 1. Project Overview & Architecture

- **Domain**: [https://foodjusticeresearch.ca](https://foodjusticeresearch.ca)
- **Primary Subdirectory**: `food-justice-research/`
- **Application Type**: Client-side Single Page Application (SPA) built with **React 18** and **Vite**.
- **Production Hosting**: **Fly.io** (App name: `food-justice-research`, Region: `yyz` - Toronto).
- **Production Runtime**: Docker container running **NGINX** serving static assets built by Vite (`/app/dist`).
- **No Backend**: There is no server-side Node.js/Python API or database in this repository. All data is static JSON/JS modules inside `src/data/`.

---

## 2. Implementation Status (Recommendations 1–4 Completed)

- [x] **Fly.io VM Configuration**: Downsized to `256mb` RAM; `auto_stop_machines = 'suspend'` and `min_machines_running = 0` set in [`fly.toml`](file:///workspace/food_justice/food-justice-research/fly.toml) so machines suspend snapshot state to RAM/storage when idle instead of running continuously or performing cold shutdowns.
- [x] **NGINX Optimization**: Dynamic `gzip` compression enabled, 1-year immutable caching for `/assets/*`, and `no-cache` for `index.html` in [`nginx.conf`](file:///workspace/food_justice/food-justice-research/nginx.conf).
- [x] **Docker Image**: Switched to `nginx:alpine-slim` (~23MB) in [`Dockerfile`](file:///workspace/food_justice/food-justice-research/Dockerfile).
- [x] **Image Modernization**: All 7 challenge data files now use `vite-imagetools` responsive WebP srcset (`?w=400;800;1200&format=webp;jpg&srcset`). Raw 3–6MB JPEGs removed from production dist.
- [x] **Hero Video & Modal Audio**: Added poster image and `preload="metadata"` in [`Hero.jsx`](file:///workspace/food_justice/food-justice-research/src/components/Hero.jsx); added `preload="none"` in [`Overlay.jsx`](file:///workspace/food_justice/food-justice-research/src/components/Overlay.jsx).
- [x] **Font & Dependency Cleanups**: Removed render-blocking `@import` from [`index.css`](file:///workspace/food_justice/food-justice-research/src/index.css); added DNS preconnects and stylesheet link in [`index.html`](file:///workspace/food_justice/food-justice-research/index.html); pruned unused packages in [`package.json`](file:///workspace/food_justice/food-justice-research/package.json).
- [x] **Deploying Changes**: To deploy the updated configuration to Fly.io, run `flyctl deploy --local-only` inside `food-justice-research/` (builds locally using Docker and avoids uploading the 300MB context to remote builders).

---

## 3. Infrastructure & Fly.io Configuration (`food-justice-research/fly.toml`)

### Current State & Bottlenecks:
1. **Oversized VM Memory**: The VM was initially configured with `memory = '1gb'` (`1024MB`). Nginx serving static files consumes only ~15–30MB of RAM. 1024MB is 4x higher than Fly's standard 256MB machine, wasting resources and monthly credits.
2. **Cold Starts vs Idle Suspend**:
   - Initial setting: `auto_stop_machines = 'stop'` halted the machine entirely after ~60s idle, causing ~1.35s cold-starts.
   - Updated setting: `auto_stop_machines = 'suspend'` and `min_machines_running = 0`. The machine suspends execution when idle (consuming 0 CPU), and resumes in sub-200ms when a request arrives.
3. **Machine Inventory**: There are 2 provisioned machines in region `yyz` (`83d314f1673d48` running, `48e7709b1d3118` stopped).

### Recommended Fly Configuration:
- Downsize to `memory = '256mb'` (or `memory_mb = 256`).
- Set `auto_stop_machines = 'suspend'` and `min_machines_running = 0` to preserve idle resources while avoiding cold shutdowns.

---

## 3. Server Configuration (`food-justice-research/nginx.conf` & `Dockerfile`)

### Critical Findings:
1. **Zero Compression (`gzip` / `brotli`)**:
   - `nginx.conf` currently lacks `gzip on;` directives.
   - Text assets like JavaScript bundles (`index-[hash].js`) are served raw uncompressed (~193 KB instead of ~50 KB gzipped).
2. **Missing `Cache-Control` Headers**:
   - `/assets/*` files (Vite hashed bundles, images, audio, video) do not have `Cache-Control: public, max-age=31536000, immutable`.
   - Browsers and proxies revalidate or re-download assets repeatedly, wasting bandwidth and Fly egress.
   - `index.html` requires `Cache-Control: no-cache, must-revalidate` so deployments take effect immediately.
3. **Container Base Image**:
   - `Dockerfile` uses `FROM nginx` (Debian-based, ~190MB).
   - Switching to `FROM nginx:alpine-slim` (~23MB) reduces image size, accelerates build and deployment pulls, and reduces memory consumption.

---

## 4. Media & Asset Performance Optimization

### 1. Hero Background Video (`src/assets/homepage/background_video.mp4` - 4.43 MB):
- Currently imported directly in `src/components/Hero.jsx` and autoplayed on all devices.
- **Recommendations**:
  - Re-encode with FFmpeg: remove audio track (`-an`), use H.264 CRF 26–28 and produce a modern WebM/VP9 version. Can easily be reduced to < 1 MB.
  - Add a crisp WebP `poster` image to prevent layout shifts and blank video boxes.
  - On mobile viewports (`< 768px`), disable video autoplay and render the poster image to conserve mobile data and battery.

### 2. Challenge Images & `vite-imagetools` Gap:
- In `src/data/`:
  - `IncreasingFoodInsecurityData.js`, `LabourMarketExploitationData.js`, and `EmergencyFoodCharityData.js` use `vite-imagetools` (`?w=400;800;1200&format=webp;jpg&srcset`).
  - **Unmigrated files**: `PovertyAndCorporateGreedData.js`, `StigmatizationData.js`, `UnaffordabilityData.js`, and `CompetitionAndPowerImbalancesData.js` import raw 3MB–5.7MB JPEGs directly!
  - Visiting any of those 4 pages downloads 15MB–30MB of raw images.
  - **Action**: Update all image imports in those 4 data files to use `?w=400;800;1200&format=webp;jpg&srcset` with `<ResponsiveImage />`.

### 3. Spoken Audio Files (`src/assets/audio/` - 75 MB):
- ~50 audio files used for interview quote overlays.
- Currently high-bitrate stereo MP3s.
- Since they are voice recordings, converting them to mono 48–64 kbps MP3 or Opus will reduce total asset weight from 75 MB to ~20 MB.
- Ensure `<audio>` elements have `preload="none"` so audio streams only when explicitly played.

---

## 5. Web Font & Frontend Optimizations

1. **Eliminate Render-Blocking Font `@import`**:
   - `src/index.css` has `@import url('https://fonts.googleapis.com/...');` at line 1.
   - This blocks initial rendering while waiting for external CSS.
   - **Action**: Move font preconnects and `<link>` stylesheets to `<head>` of `index.html`, or self-host fonts using `@fontsource`.
2. **Dependency Cleanup**:
   - `react-responsive-carousel` and `web-vitals` are in `package.json` dependencies but never imported.
   - Move test and build packages (`@playwright/test`, `playwright`, `@testing-library/*`, `serve`) to `devDependencies`.

---

## 6. Architecture Alternative: Global Edge / CDN

Since this website is 100% static React SPA:
- **Cloudflare Proxy (Immediate Win)**: Putting Cloudflare Free DNS/proxy in front of `foodjusticeresearch.ca` caches all static assets globally, eliminates 95%+ of traffic reaching Fly.io, provides HTTP/3 and edge compression, and removes cold-boot delays for cached assets.
- **Edge Static Hosting (Long-term)**: Deploying directly to Cloudflare Pages, GitHub Pages, or Vercel eliminates VM management and hosting costs entirely.
