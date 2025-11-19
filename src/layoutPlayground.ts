/**
 * Box Model + Flex Playground Panel (Act B)
 *
 * Goal: Feel the CSS box model and Flexbox as layout physics you can control
 * - See how padding/margin/border affect total size
 * - Understand content-box vs border-box
 * - Control Flexbox properties and see immediate layout changes
 * - Complete layout "poses" (challenges)
 *
 * Follow the lab instructions (Act B) step-by-step to implement this.
 */

// TODO: Step 1 - Grab the panel container
// const layoutPanel = document.querySelector<HTMLElement>('#layout-panel')
// if (!layoutPanel) throw new Error('#layout-panel not found')

// TODO: Step 2 - Inject Box Model section markup
// Include:
//   - Header
//   - Controls: sliders for padding, margin, border width
//   - Dropdown for box-sizing (content-box vs border-box)
//     Note: Set border-box as default (selected) - it's more common in modern CSS
//   - Demo box element
//   - Metrics display (content width/height, total width/height)
//   - Optional: Add a "target" hint for Drill A (see instructions)

// TODO: Step 3 - Add CSS for Box Model visualization
// Style the demo box, controls, and metrics panel
// Use getBoundingClientRect() and getComputedStyle() to calculate actual sizes

// TODO: Step 4 - Wire up Box Model controls
// Listen for 'input' events on all sliders and the box-sizing select
// In updateBoxModel():
//   1. Read current slider/select values
//   2. Apply them to demoBox.style
//   3. Calculate and display metrics:
//      - Total size: use getBoundingClientRect() (returns actual rendered size)
//      - Content size: total - padding - border
//   4. Show the difference between content-box and border-box
// Why getBoundingClientRect()? It returns the actual rendered size including transforms.
// offsetWidth only includes padding/border, not transforms. For accurate visual
// measurements, getBoundingClientRect() is the right choice.

// TODO: Step 5 - Add Flex Playground section
// Inject markup for:
//   - Flex controls (direction, justify-content, align-items, gap)
//     Note: Set reasonable defaults: row, flex-start, stretch, gap 12px
//   - Flex container with 3 demo cards
//   - List of "poses" (layout challenges) - see instructions for the three poses

// TODO: Step 6 - Wire up Flex controls
// Listen for changes on flex direction, justify, align, gap controls
// In updateFlex():
//   1. Read control values
//   2. Apply to flex container's style
//   3. Watch cards move in real-time

// TODO: Step 7 - Complete layout drills
// Try to achieve each "pose" listed in the instructions
// Document your settings in README

export { } // Make this a module

