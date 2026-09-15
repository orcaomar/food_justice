# Flemingdon & Thorncliffe Food Justice Research

The official web platform for the **Flemingdon & Thorncliffe Food Justice Research** project.

- **Live Site**: [https://foodjusticeresearch.ca](https://foodjusticeresearch.ca)
- **Tech Stack**: React 18, Vite, React Router v6, Vitest

---

## Getting Started

### Prerequisites

- Node.js 20+ (or 22+)
- npm 9+

### Installation

```bash
cd food-justice-research
npm install
```

### Available Scripts

- `npm run dev`: Starts the local development server with Vite HMR at [http://localhost:5173](http://localhost:5173).
- `npm run test`: Runs the Vitest test suite.
- `npm run build`: Compiles and bundles the application for production into the `dist/` directory.
- `npm run preview`: Locally previews the production build from `dist/`.

---

## Architecture & Hosting

This project is a static Single Page Application (SPA) with no backend server.

- **Production Hosting**: **Cloudflare Pages**
  - Continuous integration and deployment is hooked directly into the GitHub repository (`main` branch).
  - Production build command: `npm run build`
  - Output directory: `dist`
  - Automatic SSL, global edge CDN caching, and HTTP/3 support.
- **Images & Media**:
  - Challenge images are optimized at build time using `vite-imagetools` with responsive WebP `srcset` configurations.
  - Audio clips are configured with deferred preloading (`preload="none"`) to minimize data transfer until user interaction.

---

## Testing

Run tests with:
```bash
npm run test -- --run
```
Unit and component tests are run with Vitest and `@testing-library/react`.
