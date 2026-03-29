
## 2024-05-15 - [Refactored Accordion Title to Semantic Button]
**Learning:** Found an `onClick` event on a generic `div` element acting as an accordion title toggle (`<div className="accordion-title" onClick={...}>`). This common pattern breaks keyboard navigation (tabbing) and lacks semantic meaning for screen readers.
**Action:** When implementing custom interactive elements like accordions or toggles, always use a native `<button>` element rather than attaching `onClick` to a `div` or `span`. Normalize the button's appearance via CSS (`background: none; border: none; padding: 0; color: inherit; font: inherit; text-align: left; width: 100%;`) to visually match the surrounding design while retaining built-in accessibility benefits (focus management, keyboard activation, screen reader role). Additionally, use `aria-expanded={isOpen}` on the button and `aria-hidden="true"` on any decorative state indicators (+/- icons) to properly convey the control's state.

## 2024-05-16 - [Added ARIA and Keyboard Support to Custom Overlay Modal]
**Learning:** Found that the custom `<Overlay>` component was missing standard modal accessibility features. It lacked a `role="dialog"`, `aria-modal="true"`, and wasn't labeled by its title. Furthermore, keyboard users couldn't dismiss it using the `Escape` key, a fundamental expectation for modals.
**Action:** When building or modifying custom modals/overlays, ensure they include an `Escape` keydown listener on the document for keyboard accessibility. Always add `role="dialog"`, `aria-modal="true"`, and an `aria-labelledby` attribute (pointing to the modal's title ID) to properly convey the modal context and its purpose to screen readers.
## 2026-03-22 - Nested Button Accessibility

**Learning:** When styling links (`<a>`) to look like buttons, developers in this app sometimes invalidly nest a `<button>` inside the `<a>` tag to inherit button styles. This causes accessibility issues for screen readers.
**Action:** Use a semantic `<a>` tag with a dedicated class (e.g., `.map-button`) and apply button-like CSS directly to the anchor, ensuring it retains `display: inline-block`, `text-decoration: none`, and proper `:focus-visible` styling for keyboard navigation.

## 2024-05-18 - [Interactive Component Hover vs Focus Delegation]
**Learning:** Found an accessibility issue pattern specific to this app's component structure where interactive "cards" (like the Idea Cards in CommunityIdeas) have a visually cohesive design but the semantic interactive element (a `<button>`) is nested inside the card container. When applying `hover` transitions to the outer `.idea-card`, those visual states do not trigger when a keyboard user tabs to focus the inner `<button>`, creating an inconsistent experience.
**Action:** When adding hover transitions to container elements that wrap semantic interactive children, use the `:has()` selector (e.g., `.idea-card:has(.idea-card-button:focus-visible)`) to delegate the focus state of the inner child to trigger the visual styling of the parent container, ensuring visual parity between mouse hover and keyboard focus interactions.
## 2024-05-18 - Delegating Focus States to Parent Containers

**Learning:** When styling interactive cards that wrap semantic interactive children (like a Link inside a heading, or a learn-more button), the default focus outline on the inner element can be visually disjointed or unnoticeable compared to the overall card layout.

**Action:** Use the CSS `:has()` pseudo-class selector (e.g., `.card:has(.button:focus-visible)` or `.card:has(a:focus-visible)`) to delegate the focus state of the inner child to trigger the visual styling of the parent container. Remember to disable the outline on the inner child (e.g., `outline: none`) to prevent double outlines.

## 2024-05-18 - [Add focus-visible to custom styled links/buttons]
**Learning:** In the `Hero` component, an `<a>` tag was styled to look like a button (`.video-button`) but it lacked the `:focus-visible` outline. Keyboard users navigating the page could tab to it, but they wouldn't see any visual feedback, making the UI inaccessible for them.
**Action:** Always ensure that custom styled interactive elements, especially links acting as buttons, include a explicitly defined `:focus-visible` state. I should use the standard focus pattern in the app (e.g., `outline: 3px solid #005fcc; outline-offset: 4px;`) so the visual feedback is clear and consistent across the design system.

## 2025-02-28 - [Accessible Modal Focus Management]
**Learning:** Found an accessibility issue specific to the custom `<Overlay>` modal component. When the modal opened, focus remained on the element that triggered it (e.g., the "Hear Story" button) rather than moving inside the modal context, causing screen readers and keyboard users to lose track of their position. Additionally, closing the modal did not return focus to the trigger element, breaking the natural document flow for keyboard navigation.
**Action:** When implementing custom modal dialogs or overlays, always manage focus explicitly. Use a `useEffect` hook to store the `document.activeElement` when the modal opens, auto-focus a relevant element inside the modal (such as the close button), and restore focus to the stored element when the modal is unmounted.

## 2024-05-18 - Expanding Hit Areas for Nested Links
**Learning:** Found a common UX pattern where visual cards (like the Testimonials on the Research page) appear interactive but only the nested link (text) inside is clickable. This creates a small hit area, violating Fitts's Law, and leads to a frustrating user experience, especially on mobile.
**Action:** Use the CSS `::after` pseudo-element technique on the nested link (`position: absolute; inset: 0; content: "";`) while ensuring the parent card has `position: relative`. This expands the clickable area to cover the entire card without requiring JavaScript or invalidly wrapping the whole card in an `<a>` tag. Always pair this with a visual hover/focus state on the card (e.g., `transform: translateY(-4px)`) so users know the entire element is interactive.
