
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
