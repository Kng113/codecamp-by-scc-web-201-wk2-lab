# 🧪 Week 2 Lab — Browser Mechanics Lab

**Student Name:** Karma Namgyal Ghale 
**Date Started:** 12/02/2025
**Date Completed:**   
**Effective time taken:** 6-8hrs
----

## 🔗 Live Links

**Firebase URL:** https://cc-karma-wk2-lab.web.app/
**Demo Video:** _[Link to your 60-second demo video]_

---

## 📋 Project Overview

This lab builds a **Browser Mechanics Lab**—a single-page app with three interactive panels that let you see and control how the browser works:

1. **Event Explorer** — Visualize event bubbling, delegation, and `stopPropagation()`
2. **Box Model + Flex Playground** — Feel CSS layout physics with live controls
3. **Modal Lab** — Build an accessible modal with proper focus management

**Tech Stack:** Vite + TypeScript (vanilla, no React) + Firebase Hosting

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- pnpm installed
- Firebase CLI installed and logged in
- Git configured

### Setup

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Open http://localhost:5173
```

### Build & Deploy

```bash
# Type check
pnpm typecheck

# Lint
pnpm lint

# Format code
pnpm format

# Build for production
pnpm build

# Deploy to Firebase
firebase deploy
```

---

## 📝 Implementation Checklist

### Act A — Event Explorer

- [ ] Panel container found and markup injected
- [ ] Nested boxes visible (outer → middle → inner)
- [ ] Direct listeners mode working
- [ ] Delegated listener mode working
- [ ] Mode toggle switches between modes
- [ ] Event log shows target vs currentTarget
- [ ] stopPropagation checkbox affects log output
- [ ] Tag list delegation example working
- [ ] Event phase/composedPath logged (optional)

### Act B — Box Model + Flex Playground

- [ ] Box Model section with sliders
- [ ] Padding/margin/border controls update demo box
- [ ] box-sizing dropdown switches between content-box/border-box
- [ ] Metrics display shows content and total dimensions
- [ ] Flex Playground section added
- [ ] Flex controls (direction/justify/align/gap) work
- [ ] Layout "poses" achievable
- [ ] Box Model target drill completed

### Act C — Modal Lab

- [ ] Modal markup with correct ARIA attributes
- [ ] Backdrop and modal styled
- [ ] openModal() function implemented
- [ ] closeModal() function implemented
- [ ] Focus moves into modal on open
- [ ] Focus trap works (Tab/Shift+Tab stay inside)
- [ ] ESC key closes modal
- [ ] Focus returns to correct trigger button
- [ ] Backdrop click closes modal
- [ ] Two trigger buttons both work correctly

---

## 💡 What I Learned

### Event Explorer

_Write 2-3 sentences about what you learned about events:_

1. Events flow from top to target and propagate from target to top when called.
2. Events listners are called in the parents class when called to the child class and cant be stopped propagating.

### Box Model + Flex

_Write 2-3 sentences about what you learned about layout:_

1. Box model consist of padding, margin and border.
2. Flex box allows free movements of free spaces row or colmn wise.

### Modal & Focus

_Write 2-3 sentences about what you learned about accessibility:_

1. Modal allows to pop up dialogue for user friedly interation.
2. Modal and focus also can add event listeners from the key board input.

---

## 🐛 Challenges & Solutions

_Describe any bugs or confusion you encountered and how you solved them:_

| Issue | Solution | Time Lost |
|-------|----------|-----------|
| _e.g., Event log not updating_ | _Forgot to call prepend() instead of append()_ | _10 min_ |

---

## 📚 Resources Used

- [MDN: Event Bubbling](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Event_bubbling)
- [MDN: CSS Box Model](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model)
- [MDN: Flexbox Basics](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [WAI-ARIA Dialog Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/)

---

## ✅ Acceptance Checklist

- [ ] All three panels functional
- [ ] Event Explorer shows bubbling/delegation correctly
- [ ] Box Model metrics update live
- [ ] Flex controls change layout immediately
- [ ] Modal has proper focus trap
- [ ] ESC closes modal and restores focus
- [ ] Keyboard navigation works throughout
- [ ] No console errors
- [ ] Deployed to Firebase
- [ ] 60-second demo video recorded

---

**Submission Date:** 6th dec, 2025
**Ready for TA Review:**  Yes ☐ No

---

> _"If Week 1 taught the web to think, Week 2 taught it to respond—to me."_  
> — Karma Namgyal Ghale, Code Camp by SCC
