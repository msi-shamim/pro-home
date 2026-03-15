# CLAUDE.md — Project Memory

## Project Overview

**ProHome** — A professional services website built as a frontend showcase to demonstrate capabilities to the client. Backend integration will come later.

- **Framework:** Astro (v6)
- **Phase:** Frontend only (client demo)
- **Docs:**
  - `docs/ProHome_Requirements_Doc.md` — Requirements
  - `docs/ProHome_Website_Full_Analysis.md` — Client data & content reference

---

## Data Source Reference

> **All website content, copy, service listings, contact info, and any other data must be sourced from `docs/ProHome_Website_Full_Analysis.md`.** This file contains the complete, client-approved information. Never invent or assume data — always pull from this document.

---

## Language & i18n

- **Default:** Spanish — `es-CL` (Chilean Spanish)
- **Alternate:** English — `en-US`
- Easy language switcher accessible from all pages
- All static text must use translation keys (no hardcoded strings)
- URL structure: `/es/...` (default) and `/en/...`

---

## Design System

### Philosophy

**Minimalism** — generous whitespace, sharp edges, modern & exclusive feel.

### Color Palette (60/30/10 Rule)

| Role   | Light Mode         | Dark Mode              |
| ------ | ------------------ | ---------------------- |
| 60%    | `#FFFFFF` (white)  | `#000000` (black)      |
| 30%    | `#808080` (gray)   | `#D3D3D3` (light gray) |
| 10%    | `#000000` (black)  | `#FFFFFF` (white)      |

### Theme

- Support **Light / Dark** mode toggle
- Persist user preference in `localStorage`
- Respect `prefers-color-scheme` as initial default

### Typography & Edges

- Modern sans-serif font (e.g., Inter, Outfit)
- **Sharp edges only** — no border-radius, no rounded corners
- Clean grid-based layouts with ample spacing

---

## Responsiveness

- **Mobile-first** responsive design
- Mobile view must feel like a **native app**:
  - **Bottom navigation bar** (persistent)
  - **Drawer menu** (slide-in)
  - **Floating Action Button (FAB)** for WhatsApp contact
- Desktop: standard top navbar + full layouts

---

## Animations & Transitions

- **Framer Motion** for all:
  - Page transitions (route changes)
  - Component mount/unmount animations
  - Micro-interactions (hover, tap, scroll-reveal)
- Keep animations subtle and premium — no flashy or playful effects

---

## SEO

- Proper `<title>` and `<meta description>` on every page
- Single `<h1>` per page with logical heading hierarchy
- Semantic HTML5 elements (`<header>`, `<main>`, `<nav>`, `<section>`, `<footer>`)
- Clean, human-readable URL slugs
- `hreflang` tags for multilingual SEO
- Open Graph & Twitter Card meta tags
- Unique, descriptive `id` attributes on interactive elements

---

## Project Structure

```
pro-home/
├── docs/                  # Project documentation
├── public/                # Static assets
├── src/
│   ├── components/        # Reusable UI components
│   ├── layouts/           # Page layouts
│   ├── pages/             # Astro file-based routing
│   │   ├── es/            # Spanish pages (default)
│   │   └── en/            # English pages
│   ├── i18n/              # Translation files & utilities
│   ├── styles/            # Global CSS & design tokens
│   └── assets/            # Images, icons, fonts
├── astro.config.mjs
├── tsconfig.json
├── package.json
└── CLAUDE.md              # This file (project memory)
```

---

## Key Commands

```bash
npm run dev       # Start dev server
npm run build     # Production build
npm run preview   # Preview production build
```

---

## Rules for AI

1. Always check this file before making changes
2. Never hardcode text — use i18n keys
3. Follow the 60/30/10 color ratio strictly
4. All components must be responsive (mobile-first)
5. Use sharp edges everywhere — zero border-radius
6. Add Framer Motion transitions to every new page/component
7. Ensure every page has proper SEO meta tags
8. Keep the design minimal, spacious, and premium
