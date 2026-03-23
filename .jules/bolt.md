## 2025-02-13 - Code Splitting Above-the-Fold Content

**Learning:** When implementing React code splitting, lazy-loading above-the-fold components (like `Hero`, `Quotes`, `OurResearch`) on the main index route is a performance anti-pattern. This approach forces the browser to wait for an additional network request before rendering the main view, delaying the initial paint and actively degrading the Largest Contentful Paint (LCP) metric.

**Action:** Keep critical above-the-fold components synchronous for faster initial load. Only use `React.lazy()` for non-initial route code splitting or heavy, below-the-fold components to effectively reduce the initial bundle size without sacrificing perceived performance. Ensure temporary workspace artifacts (like `.bak` or log files) are deleted before submission.

## 2025-03-14 - Prevent Delayed LCP for Above-the-Fold Responsive Images
**Learning:** The `ResponsiveImage` component defaults to `loading="lazy"` when provided an array of sources (e.g., from `vite-imagetools`). When used for critical above-the-fold images like hero sections or mastheads (e.g., `ChallengePage` and `CommunityIdeas`), this default behavior delays the Largest Contentful Paint (LCP). React props spreading `{...props}` applied after `loading="lazy"` can successfully override the lazy loading, but React requires the DOM attribute to be lowercase `fetchpriority` instead of `fetchPriority`.
**Action:** Always verify that above-the-fold images explicitly receive `loading="eager"` and `fetchpriority="high"` props when using the `ResponsiveImage` component to override its lazy-loading default.

## 2025-03-14 - Preventing LCP delays with ResponsiveImage
**Learning:** When optimizing above-the-fold images (like mastheads) in this repository by replacing CSS `background-image` with the HTML `<ResponsiveImage>` component to improve Largest Contentful Paint (LCP), always explicitly import `ResponsiveImage` in the file. React's JSX transpilation will throw a fatal `ReferenceError` at runtime if the custom component is not imported, even though standard HTML tags don't require imports.
**Action:** When introducing a new component like `ResponsiveImage` into a React file, explicitly verify its import statement is present before committing to prevent runtime crashes.

## 2025-03-21 - Defer Loading of Interactive Iframes
**Learning:** Interactive embedded resources, like Google Maps inside `<iframe>` tags in components such as `ChallengePage.jsx` and `GetInvolved.jsx`, block the main thread and consume significant bandwidth during initial page load, degrading Largest Contentful Paint (LCP) and Time to Interactive (TTI) metrics.
**Action:** Consistently apply the `loading="lazy"` attribute to off-screen `<iframe>` tags. This ensures modern browsers defer downloading these heavy assets until the user scrolls near them, providing an immediate boost to perceived and actual initial load performance without architectural changes.

## 2025-03-23 - Optimize ResearchPartners Image Assets
**Learning:** The `ResearchPartners.jsx` component rendered several large `.png` assets using simple `<img>` tags, resulting in poor image delivery and large, unoptimized network payloads. By converting these imports to leverage `vite-imagetools` parameters (`?w=...&format=webp;png&srcset`) and rendering them with the project's `<ResponsiveImage>` component, we significantly reduced the initial payload size and enabled automatic WebP generation alongside lazy loading.
**Action:** Always scrutinize static image imports (like `.png` or `.jpg` imports without query strings) and standard `<img>` tags in React components. If `vite-imagetools` and a custom `<ResponsiveImage>` component exist in the codebase, proactively use them to generate responsive, modern image formats, ensuring comments explain the LCP/bundle size impact.
