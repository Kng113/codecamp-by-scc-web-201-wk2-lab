/**
 * Modal Lab Panel (Act C)
 *
 * Goal: Build an accessible modal dialog that respects keyboard users
 * - Correct ARIA semantics (role="dialog", aria-modal="true")
 * - Focus moves into modal on open
 * - Focus trap (Tab/Shift+Tab stay inside)
 * - ESC closes and returns focus to trigger
 * - Backdrop click closes modal
 *
 * Follow the lab instructions (Act C) step-by-step to implement this.
 */

// TODO: Step 1 - Grab the panel container
// const modalPanel = document.querySelector<HTMLElement>('#modal-panel')
// if (!modalPanel) throw new Error('#modal-panel not found')

// TODO: Step 2 - Inject modal markup
// Include:
//   - Header
//   - Two trigger buttons (to test focus restoration)
//   - Backdrop element (dimmed overlay)
//   - Modal dialog with:
//     - role="dialog"
//     - aria-modal="true"
//     - aria-labelledby pointing to modal title
//     - tabindex="-1" (makes it focusable programmatically but removes from tab order)
//     - Title, content, close button, extra button (for focus trap testing)

// TODO: Step 3 - Add CSS for modal
// Style:
//   - Backdrop: fixed, full screen, semi-transparent
//   - Modal: fixed, centered, max-width, shadow, rounded corners
//   - .hidden class: display: none (for show/hide)

// TODO: Step 4 - Implement openModal function
// Parameters: trigger element (button that opened the modal)
// Steps:
//   1. Store trigger in lastFocused variable (for focus restoration)
//   2. Remove .hidden from backdrop and modal
//   3. Prevent body scroll: document.body.style.overflow = 'hidden'
//   4. Find all focusable elements in modal (getFocusableElements helper)
//   5. Focus first focusable element (or modal itself if none)

// TODO: Step 5 - Implement closeModal function
// Steps:
//   1. Add .hidden to backdrop and modal
//   2. Restore body scroll: document.body.style.overflow = ''
//   3. Return focus to lastFocused element (the trigger button)

// TODO: Step 6 - Wire up open triggers
// Add click listeners to both trigger buttons
// Each calls openModal(triggerElement)

// TODO: Step 7 - Wire up close triggers
// Add click listener to close button → calls closeModal()
// Add click listener to backdrop → calls closeModal()

// TODO: Step 8 - Implement focus trap
// Add keydown listener to modal element
// Handle:
//   - ESC key → event.preventDefault(), then closeModal()
//   - Tab key:
//     - Get focusable elements using getFocusableElements(modal)
//     - Find first and last focusable elements
//     - Get current focused element: document.activeElement
//     - If Shift+Tab (backwards):
//       - If on first element OR not in focusables → preventDefault(), focus last
//     - If Tab (forwards):
//       - If on last element OR not in focusables → preventDefault(), focus first
//     - This creates a "trap" - focus can't escape the modal
// Why preventDefault()? Without it, the browser's default Tab behavior would
// move focus outside the modal. We prevent that and manually control focus instead.

// TODO: Step 9 - Create getFocusableElements helper
// Function that finds all focusable elements in a container:
//   - Use querySelectorAll with: 'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
//   - Filter out disabled elements: !el.hasAttribute("disabled")
//   - Filter out aria-hidden elements: !el.getAttribute("aria-hidden")
//   - Return Array.from(...) to convert NodeList to Array
// Returns array of HTMLElements
// This helper is used by both openModal (to focus first element) and focus trap (to cycle through)

// TODO: Step 10 - Test accessibility
// - Open modal, try Tab/Shift+Tab (should stay inside)
// - Press ESC (should close and return focus)
// - Open from different buttons (focus should return to correct one)
// - Check with screen reader if possible

export { } // Make this a module

