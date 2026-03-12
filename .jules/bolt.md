## 2025-02-13 - Code Splitting Above-the-Fold Content

**Learning:** When implementing React code splitting, lazy-loading above-the-fold components (like `Hero`, `Quotes`, `OurResearch`) on the main index route is a performance anti-pattern. This approach forces the browser to wait for an additional network request before rendering the main view, delaying the initial paint and actively degrading the Largest Contentful Paint (LCP) metric.

**Action:** Keep critical above-the-fold components synchronous for faster initial load. Only use `React.lazy()` for non-initial route code splitting or heavy, below-the-fold components to effectively reduce the initial bundle size without sacrificing perceived performance. Ensure temporary workspace artifacts (like `.bak` or log files) are deleted before submission.
