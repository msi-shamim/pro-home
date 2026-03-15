![PRO HOME® — Experts in B2B Contracts & Investment](public/og-default.png)

# PRO HOME®

**Premium property management in Antofagasta, Chile.**

> Experts in B2B contracts & real estate investment.

---

## 🏠 About

PRO HOME® is a bilingual (ES/EN) property management website built for a real estate agency specializing in B2B contracts, corporate housing, and investment services in Antofagasta, Chile.

**Live:** [www.pro-home.cl](https://www.pro-home.cl)

---

## ⚡ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | [Astro](https://astro.build) v6 |
| **UI Components** | React 19 + Framer Motion |
| **Styling** | Vanilla CSS with design tokens |
| **i18n** | Custom ES/EN bilingual system |
| **SEO** | Structured data (JSON-LD), hreflang, OG/Twitter cards |
| **Sitemap** | `@astrojs/sitemap` with i18n locales |

---

## 📁 Project Structure

```
src/
├── components/        # Reusable Astro & React components
│   ├── Navbar.astro       # Desktop navigation
│   ├── Drawer.tsx         # Mobile drawer (Framer Motion)
│   ├── Footer.astro       # Footer with newsletter & social links
│   ├── PropertyCard.astro # Property listing card with Unsplash images
│   ├── SEOHead.astro      # Meta tags, OG, hreflang, structured data
│   └── ...
├── i18n/              # Bilingual translation files
│   ├── en.json
│   ├── es.json
│   └── index.ts
├── layouts/
│   └── BaseLayout.astro   # Shared layout (Navbar + Footer + SEO)
├── pages/
│   ├── en/                # English routes
│   └── es/                # Spanish routes
│       ├── index.astro        # Homepage
│       ├── propiedades.astro  # Properties listing
│       ├── reservar.astro     # Reservation page
│       ├── contacto.astro     # Contact page
│       ├── empresas.astro     # B2B funnel
│       ├── propietarios.astro # Owners funnel
│       └── servicios/         # Service detail pages
└── styles/
    └── global.css         # Design tokens & global styles
```

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

**Requirements:** Node.js ≥ 22.12.0

---

## 🌐 Pages

| Route | Description |
|-------|-------------|
| `/es` · `/en` | Homepage with hero, benefits, services, FAQ, reviews, map |
| `/*/propiedades` | Property listings with Unsplash images & filters |
| `/*/reservar` | Booking page with WhatsApp integration |
| `/*/contacto` | Contact form & Google Maps embed |
| `/*/servicios` | Services overview + 7 detail pages |
| `/*/empresas` | B2B corporate funnel |
| `/*/propietarios` | Property owners funnel |
| `/*/por-que-pro-home` | Why PRO HOME® page |

---

## 🎨 Design System

- **60-30-10 color rule** — monochrome with accent
- **Typography** — Inter font family with bold/thin logo treatment
- **Dark mode** — Full theme toggle with system preference detection
- **Animations** — Scroll-reveal + Framer Motion micro-interactions
- **Mobile** — Responsive with bottom tab nav + animated drawer

---

## 📊 SEO Features

- ✅ Canonical URLs & hreflang (es-CL / en-US)
- ✅ Open Graph & Twitter Card meta tags
- ✅ RealEstateAgent structured data (JSON-LD)
- ✅ FAQPage schema for rich snippets
- ✅ Auto-generated sitemap with i18n
- ✅ robots.txt
- ✅ SVG favicon + ICO fallback
- ✅ Geo-region meta tags (Antofagasta, CL)

---

## 🎯 Sales Funnels

### Funnel 1 — Property Acquisition (B2C / Investors)

Attracts property owners who want PRO HOME® to manage their properties.

| Stage | Detail |
|-------|--------|
| **Traffic** | Instagram/Facebook ads + Organic SEO ("Administración de propiedades Antofagasta") |
| **Landing** | `/*/propietarios` — Dedicated page addressing landlord pain points ("¿Cansado de tener problemas con arrendatarios?") with the PRO HOME® solution (B2B contracts, full management) |
| **Conversion** | "Free Assessment" lead capture form (Name, Property Details, WhatsApp) |
| **Automation** | Form → WhatsApp auto-message → CRM injection → Automated email sequence with success metrics |

### Funnel 2 — Corporate Housing Logistics (B2B)

Secures bulk rental contracts with large corporations (mining sector, Exponor events).

| Stage | Detail |
|-------|--------|
| **Traffic** | LinkedIn outreach + Direct sales + SEO ("Alojamiento corporativo Antofagasta") |
| **Landing** | `/*/empresas` — Corporate-focused page showcasing full logistics capability for companies |
| **Conversion** | "Request Corporate Proposal" form |
| **Automation** | High-priority B2B leads routed directly to sales rep via instant notification, bypassing generic queues |

---

## 📞 Contact

- **Website:** [www.pro-home.cl](https://www.pro-home.cl)
- **Instagram:** [@_pro_home](https://www.instagram.com/_pro_home/)

---

## 📄 License

All rights reserved © PRO HOME®

---

## 🛠️ Built by

Designed & developed by [**Increments Inc.**](https://incrementsinc.com)
