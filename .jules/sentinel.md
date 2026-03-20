## 2024-05-24 - Missing reCAPTCHA/rate limiting on contact form
**Vulnerability:** Contact form in Footer.jsx submits directly to a third-party service without CAPTCHA, CSRF token, or custom rate limiting.
**Learning:** This can lead to form spam or abuse since there's no client-side protection.
**Prevention:** We should add rate limiting or CAPTCHA, or rely on the backend (if applicable) to do so. Since this is an external service, we should at least check if there's any easy security enhancement we can do.

## 2024-05-24 - Missing target="_blank" vulnerability (Reverse Tabnabbing)
**Vulnerability:** Links with target="_blank" must use rel="noopener noreferrer" or just "noopener" to prevent the newly opened page from accessing the window.opener object and potentially redirecting the original page.
**Learning:** Found an instance in data/PovertyAndCorporateGreedData.js where `rel="noopener"` is used, but ideally it should also use `noreferrer` for full coverage on older browsers, though `noopener` is generally sufficient for modern ones. There are other `a` tags without any `rel` when opening external links.
**Prevention:** Enforce `rel="noopener noreferrer"` for all external links.

## 2024-05-24 - XSS via dangerouslySetInnerHTML
**Vulnerability:** The application uses dangerouslySetInnerHTML in `src/components/ChallengePage.jsx` to render section text from data files.
**Learning:** While DOMPurify is used, any bypass in DOMPurify or misconfiguration could lead to XSS. This is currently mitigated by `DOMPurify.sanitize()`, which is a good practice.
**Prevention:** Keep DOMPurify updated and avoid `dangerouslySetInnerHTML` if possible, relying on React elements.

## 2024-05-24 - Missing Security Headers in Nginx configuration
**Vulnerability:** Nginx configuration does not set basic security headers such as X-Content-Type-Options, X-Frame-Options, or Content-Security-Policy.
**Learning:** This exposes the application to attacks like Clickjacking and MIME sniffing.
**Prevention:** Add appropriate security headers to the Nginx configuration to enhance defense in depth.

## 2024-05-24 - Missing sandbox attribute on iframe map
**Vulnerability:** Interactive maps embedded via `<iframe>` in `GetInvolved.jsx` were missing the `sandbox` attribute.
**Learning:** External content loaded without sandboxing can execute arbitrary scripts with the full privileges of the hosting application, posing an XSS risk.
**Prevention:** Always apply the `sandbox` attribute (e.g., `sandbox="allow-scripts allow-same-origin"`) to `<iframe>` tags embedding external interactive content to restrict its capabilities.
## 2024-05-25 - [Add Input Length Limits]
**Vulnerability:** The contact form submitted data directly to an external service (submit-form.com) without backend rate limiting or CAPTCHA, making it vulnerable to Denial of Service (DoS) attacks via sending excessively large payloads in the form inputs.
**Learning:** In a heavily decoupled frontend architecture like this (fetching directly to a third-party form handler), standard server-side protections are missing, placing more responsibility on the frontend to implement defense-in-depth measures like payload size restriction.
**Prevention:** Implement `maxLength` attributes on all form input elements to enforce client-side constraints on data size before submission.
## 2024-05-25 - [Add Content Security Policy]
**Vulnerability:** The application was missing a Content-Security-Policy (CSP) header in its Nginx configuration, leaving it vulnerable to Cross-Site Scripting (XSS) and data injection attacks if other defenses (like DOMPurify) failed.
**Learning:** Even static SPA applications that rely on third-party services (like Google Analytics, Google Maps, and external form handlers) need a strict CSP to restrict the sources of executable scripts, stylesheets, and connections to known-good domains. This is a crucial layer of defense in depth.
**Prevention:** Always configure a comprehensive `Content-Security-Policy` header in the production web server (e.g., Nginx) that explicitly whitelists trusted domains for `script-src`, `connect-src`, `frame-src`, and other relevant directives.
## 2024-05-24 - Add rel="noopener noreferrer" for DOMPurify target="_blank"
**Vulnerability:** Reverse Tabnabbing (Medium/High severity). External links rendered via `DOMPurify` with `target="_blank"` did not have `rel="noopener noreferrer"`, exposing the application to reverse tabnabbing attacks where the newly opened tab could manipulate the `window.opener` object to redirect the parent page to a malicious site.
**Learning:** `DOMPurify` strips `target="_blank"` by default unless explicitly configured via `{ ADD_ATTR: ['target'] }`. However, allowing `target` does not automatically add the necessary `rel="noopener noreferrer"` attributes. The vulnerability existed because the data rendered dynamically contained `target="_blank"` without the corresponding `rel` attributes, and `DOMPurify` merely sanitized the HTML without enforcing safe link handling.
**Prevention:** When using `DOMPurify` to allow `target="_blank"` links, always utilize a `DOMPurify.addHook('afterSanitizeAttributes', ...)` hook to programmatically enforce `rel="noopener noreferrer"` on all anchor (`<a>`) tags that have a `target="_blank"` attribute, preventing reliance on data authors to include it manually.
