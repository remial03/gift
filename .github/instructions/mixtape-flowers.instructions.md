---
description: "Use when building the Mixtape & Flowers digital gift app — React components, Tailwind layout, Framer Motion animations, gift box opening sequence, turntable spin, flower bouquet, audio playback, or share/URL encoding."
applyTo: "**/*.{jsx,tsx,js,ts,css}"
---

# Mixtape & Flowers — Digital Gift App

## Project Overview

This is a "Mixtape & Flowers" digital gift built with **React**, **Tailwind CSS**, and **Framer Motion**. The user opens a vintage delivery box to reveal a spinning turntable and a blooming digital bouquet, accompanied by music.

## Tech Stack

- **React** (functional components, hooks only — no class components)
- **Tailwind CSS** for all styling (no separate CSS files for new components)
- **Framer Motion** for all animations (`motion` components, `animate`, `variants`, `useAnimation`)
- **HTML5 Audio API** for music playback
- **Vite** as the build tool

## Folder Structure

```
src/
  components/
    GiftBox.jsx       # Box wrapper + lid opening animation
    Bouquet.jsx       # Flower SVGs mapped from coordinate array
    Turntable.jsx     # Turntable image + spinning record logic
    ShareButton.jsx   # Copy shareable URL to clipboard
  assets/
    turntable.png     # Turntable image
    song.mp3          # Audio file
  App.jsx
  main.jsx
```

## Core Architecture

### State Management

- Use a single `isOpen` boolean state in `GiftBox.jsx` to toggle between the closed box and the revealed gift.
- Lift state up to `App.jsx` only if multiple sibling components need it.

### Z-Index Layering (The "Sandwich")

All gift contents are **absolutely positioned** inside a **relative** container:

| Layer  | Component     | z-index | Purpose                         |
| ------ | ------------- | ------- | ------------------------------- |
| Back   | Box interior  | z-0     | Background / container          |
| Middle | `<Bouquet>`   | z-10    | Flowers appear behind turntable |
| Front  | `<Turntable>` | z-20    | Record player sits on top       |

```jsx
// Example layout pattern
<div className="relative w-full h-full">
  <Bouquet className="absolute inset-0 z-10" />
  <Turntable className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20" />
</div>
```

### Unboxing Sequence

When `isOpen` becomes `true`, trigger this sequence via `useEffect`:

1. **Animate lids** — Box top/bottom lids animate open using Framer Motion `variants`
2. **Play music** — Call `audioRef.current.play()` after lid animation completes
3. **Bloom flowers** — Staggered animation: flowers pop up one by one from behind the turntable

```jsx
// Stagger pattern for flowers
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const flowerVariants = {
  hidden: { opacity: 0, y: 50, scale: 0 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring" } },
};
```

### Turntable Spin Animation

- Use Framer Motion's `animate` prop with `rotate: 360` and `transition: { repeat: Infinity, duration: 3, ease: "linear" }`.
- Only spin when `isOpen` is `true`.
- Apply spin to the **record/vinyl portion** only, not the entire turntable image. Use a separate `<motion.div>` overlay or CSS mask if needed.

### Audio

- Use a `useRef` for the `<audio>` element.
- Set `loop` to `true`.
- Trigger `.play()` inside the `useEffect` that runs when `isOpen` transitions to `true`.
- Handle the browser autoplay policy: wrap `.play()` in a try/catch or use `.play().catch()`.

### Bouquet / Flowers

- Define flowers as an **array of coordinate objects**: `{ id, x, y, emoji, color, size }`.
- `Bouquet.jsx` maps over this array and renders each flower as a `<motion.div>` with absolute positioning.
- Each flower uses the staggered `flowerVariants` for the bloom-in effect.

### Share Feature

- `ShareButton.jsx` encodes a message and `flowerData` array into **Base64** and appends it as a URL query parameter.
- Use `navigator.clipboard.writeText()` to copy the shareable URL.
- On load, check for query params and decode to reconstruct the gift for the recipient.
- Sanitize decoded data before rendering — never use `dangerouslySetInnerHTML` with user input.

## Animation Rules

- All animations use **Framer Motion** — no raw CSS `@keyframes` for new components.
- Use `AnimatePresence` for mount/unmount transitions (e.g., box opening).
- Prefer `variants` objects over inline `animate` props for reusable/sequenced animations.
- Use `transition.delay` or `staggerChildren` for choreographed sequences, not `setTimeout`.

## Code Style

- Functional components only, named exports.
- Destructure props in function signature.
- Use Tailwind utility classes; avoid inline `style` objects unless dynamic values require it (e.g., flower coordinates from data).
- Keep components focused: one file per visual concern.

## Security

- Sanitize all Base64-decoded URL parameters before rendering.
- Never execute or `eval` decoded URL data.
- Validate the structure of decoded `flowerData` before passing to components.
