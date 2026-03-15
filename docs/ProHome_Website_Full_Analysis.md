# Pro Home – Complete Website Analysis & Information Dossier

> **Analysis Date:** March 15, 2026
> **Website:** [https://www.pro-home.cl](https://www.pro-home.cl)
> **Industry:** Real Estate Management & Corporate Housing
> **Market:** Antofagasta, Chile (Mining & Energy Hub)

---

## 1. General Technical Information

| Attribute | Detail |
|---|---|
| **Domain** | `pro-home.cl` |
| **Primary Language** | Spanish (es-CL) |
| **Framework** | React SPA (SolidJS/Vinxi build system) |
| **CSS** | Single bundled CSS file (`client-DzYvXoAo.css`) |
| **JS Bundler** | Vite (asset hashes in filenames) |
| **Maps Integration** | Leaflet.js (OpenStreetMap) for property maps |
| **Charts** | Chart.js with datalabels plugin (for internal metrics/reports) |
| **HTML to Image** | html2canvas (for report exporting) |
| **HTTP Client** | Axios |
| **Routing** | File-based routing (SolidJS-style `src/routes/`) |
| **SEO Status** | ⚠️ Poor – SPA renders only a blank `<h1>` tag on initial load; no SSR/SSG; no meta description, Open Graph, or structured data |
| **HTML Lang Attribute** | `lang="en"` (incorrect – content is Spanish) |
| **Favicon** | Custom logo (`logonegro-CVYctT6J.png`) |
| **Mobile Support** | Dedicated `MobileNavBar` component |
| **WhatsApp Widget** | Floating WhatsApp button on all pages |
| **Downloadable Assets** | "Descargar perfil de la empresa" (Company profile PDF) |

---

## 2. Brand Identity

| Attribute | Detail |
|---|---|
| **Brand Name** | PRO HOME® (Registered Trademark) |
| **Logo** | Circular black icon with a stylized house and human figure, paired with "PRO HOME" wordmark |
| **Color Palette** | Black, White, Warm Gold/Tan accents, Dark Gray |
| **Design Style** | Clean, modern, minimalist with card-based layouts and professional imagery |
| **Tagline** | "Expertos en Contratos B2B e Inversión" (Experts in B2B Contracts & Investment) |

---

## 3. Contact Information

| Channel | Detail |
|---|---|
| **Official Phone / WhatsApp** | (+569) 3131 9706 |
| **Nicolas (Owner) WhatsApp** | +56 9 9358 2954 |
| **Additional Number** | +56 9 6196 9038 |
| **Official Email** | contacto@pro-home.cl |
| **Secondary Email** | hola@pro-home.cl |
| **Office Address** | Av. Balmaceda 2455, Oficina 1209, Antofagasta, Chile |
| **Business Hours** | Mon–Fri: 09:00 – 18:00 hrs / Sat: 09:00 – 13:00 hrs |

### Social Media

| Platform | Link |
|---|---|
| **Instagram** | [`@_pro_home_`](https://www.instagram.com/_pro_home_/) – 2,857 followers, 322 posts |
| **Facebook** | [Pro-Home](https://www.facebook.com/p/Pro-Home-100063693451178/) |
| **TikTok** | Present (linked in footer) |
| **WhatsApp** | Integrated floating widget on site |

---

## 4. Navigation Structure (Sitemap)

```
├── INICIO (Homepage) [/]
├── ¡VIVE LA EXPERIENCIA! (Property Listings) [/properties]
│   └── Property Detail [/properties/:id]
├── SERVICIOS (Services Dropdown) [/servicios]
│   ├── Gestión Inmobiliaria
│   │   ├── Administración de Propiedades [/administracion-propiedades]
│   │   ├── Administración Corto Plazo [/administracion-corto-plazo]
│   │   └── Servicio de Inversión [/servicio-de-inversion]
│   ├── Pro-Home Care
│   │   ├── Limpieza de Propiedades [/limpieza-de-propiedades]
│   │   ├── Mantenimiento de Propiedades [/mantenimiento-de-propiedades]
│   │   └── Diseño y Decoración [/diseño-y-decoracion]
│   └── Logística de Alojamiento para Empresas [/logistica-de-alojamiento-para-empresas]
├── CONTACTO [/contacto]
├── RESERVE AQUÍ [/reserve-aqui]
├── ¿POR QUÉ PRO HOME? [/porqueprohome]
└── LOGIN (Admin) [/login]
    ├── Administración Dashboard [/administracion]
    ├── Crear Propiedad [/crearpropiedad]
    ├── Editar Propiedad [/editarpropiedad/:id]
    ├── Métricas [/metricas/:propertyname]
    ├── Informes [/informe/:propertyname]
    └── Editor Pages [/editar/*]
```

---

## 5. Homepage Content

### Hero Section
- Large **PRO HOME®** logo (centered)
- Sub-text: **"Servicios"**
- Primary CTA: **"Contáctanos"** button (links to WhatsApp)

### Top Info Bar
- Business hours: "Lunes a Viernes 09:00 hrs. a 18:00 hrs. / Sábados 09:00 hrs a 13:00 hrs."
- Phone: (+569) 3131 9706
- Address: Av. Balmaceda 2455 Of. 1209, Antofagasta
- Email: contacto@pro-home.cl
- "Descargar perfil de la empresa" (Download company profile)

### Benefits Section: "Beneficios de Trabajar con PRO HOME®"

| Benefit | Description |
|---|---|
| **Las mejores tarifas de alquiler del mercado garantizadas** | "En casi todos los casos, podemos aumentar el pago mensual que recibes por tu propiedad entre un 5% y un 15%. Esto lo conseguimos gracias a nuestras alianzas y a nuestra experiencia en encontrar los mejores inquilinos, lo que nos permite mejorar tus ingresos de manera segura y efectiva." |
| **Gestión de inquilinos de espectro completo** | "Además de nuestro programa de selección de nuevos inquilinos de 10 pasos, el secreto de nuestro éxito es ser proactivos y estar en constante comunicación con nuestros inquilinos." |
| **Costos de mantenimiento y reparación más bajos** | "Hemos formado un equipo propio para realizar trabajos de mantenimiento y reparación en las propiedades que gestionamos. Además, contamos con proveedores cuidadosamente seleccionados, logrando precios preferenciales. Esto nos permite garantizar reparaciones de alta calidad a costos mucho más bajos que el promedio del mercado, sin comprometer la seguridad ni la eficiencia." |
| **Soporte administrativo integral** | "Pro Home es experto en la logística de alojamiento para empresas, garantizando una gestión eficiente y personalizada para cumplir con las necesidades de empresas que requieren espacios de calidad para sus empleados o proyectos temporales." |

### Client Logos ("NUESTROS CLIENTES")

| # | Client Name | Industry |
|---|---|---|
| 1 | CJR Renewables | Renewable Energy |
| 2 | INTEALSA | Construction/Engineering |
| 3 | CheckIn Hotel | Hospitality |
| 4 | SICOMAQ (Construcción y Maquinarias) | Heavy Machinery |
| 5 | bioclean | Cleaning Services |
| 6 | SQ ENERGÍAS (Redco Chile) | Energy |
| 7 | DALI | — |
| 8 | SKF | Industrial Bearings |
| 9 | San Francisco Ingeniería | Engineering |
| 10 | CleanTech Lithium | Lithium Mining |
| 11 | Inv. VYL SpA | Investments |
| 12 | bbosch | Construction |

### Google Reviews
- Integrated Google Reviews widget
- Example: 5-star review praising **Alessandra Malatesta** for "profesionalismo, dedicación y compromiso"

### Footer

| Section | Content |
|---|---|
| **Objetivo** | "Nuestro objetivo es ofrecerte la tranquilidad que necesitas para maximizar tus ingresos. Contamos con una amplia gama de herramientas y un profundo conocimiento en diversas áreas, que combinamos estratégicamente para generar un éxito mutuo." |
| **Oficina de Atención** | (+569) 31319706 / hola@pro-home.cl / Avenida Balmaceda 2455, oficina 1209 |
| **Map** | Embedded Google Map showing office location |
| **Social Icons** | Facebook, WhatsApp, Instagram, TikTok |

---

## 6. Services Page (`/servicios`)

### Service 1: Gestión Inmobiliaria
Complete real estate management encompassing sales, rentals, long-term property administration, maintenance coordination, strategic marketing, and expert negotiation.

### Service 2: Gestión de Alojamiento para Empresas
Planning and coordination of corporate lodging services tailored to business projects — including accommodation sourcing, logistics, and ongoing support.

### Service 3: Limpieza de Edificios
Specialized cleaning services for buildings and apartments, adapted to specific needs including regular cleaning, punctual deep-cleans, and event-based cleaning.

### Service 4: Reparaciones
In-house maintenance and repair team ensuring property value preservation through quality work at competitive rates.

---

## 7. Short-Term Administration (`/administracion-corto-plazo`)

**Service Focus:** Maximizing profitability for short-term (daily/weekly) rental properties.

**6-Step Process:**

| Step | Name | Description |
|---|---|---|
| 1 | Evaluación de la Propiedad | Identifying improvement opportunities to maximize appeal |
| 2 | Equipamiento y Suministros | Furnishing properties to guest-ready standards |
| 3 | Revenue Management | Dynamic pricing optimization for maximum income |
| 4 | Fotografía Profesional | High-quality professional photography to attract bookings |
| 5 | Atención al Huésped 24/7 | Round-the-clock guest support during stays |
| 6 | Limpieza Profesional | Professional cleaning between stays to maintain ratings |

---

## 8. Corporate Lodging Logistics (`/logistica-de-alojamiento-para-empresas`)

**Service Focus:** End-to-end corporate housing logistics for companies with employees in Antofagasta.

**Key Offerings:**

| Service | Description |
|---|---|
| Booking Management | Sourcing and managing apartments or corporate residences |
| Check-In / Check-Out | Full coordination of arrivals and departures |
| Local Transport | Airport ↔ Office ↔ Accommodation logistics |
| Emergency Support | 24/7 support for urgent issues |
| Financial Management | Direct billing, payment admin, and expense reporting |
| Additional Services | Catering, laundry, and corporate event organization |

---

## 9. Team ("¿Por Qué PRO HOME?" – `/porqueprohome`)

| Name | Role | Background |
|---|---|---|
| **Alessandra Malatesta Marey** | Founder & Senior Real Estate Manager | Expert negotiator, key client relationship management, mentioned in 5-star Google reviews |
| **Diego Montofre Gallardo** | Operations Manager | Industrial/Commercial Engineering background |
| **Luis Lazcano** | Real Estate Manager | Property administration specialist |
| **Angely Bugueño** | Real Estate Manager | Client-facing property management |

**Philosophy:** Personalized solutions — adapting beyond standard real estate mediation to address unique client requirements with a human-centered approach.

---

## 10. Reservation System (`/reserve-aqui`)

Integrated booking engine for short-term rental properties.

| Property | Nightly Rate (CLP) |
|---|---|
| PRO HOME VISTA HORIZONTE | Starting at $49,999 / night |
| PRO HOME Rímini | Starting at $71,400 / night |

**Booking Form Fields:** Check-in date, Check-out date, Number of guests.

---

## 11. Property Listings (`/properties`)

**Total Pages:** 13 pages of listings (paginated).
**Listing Types:** Arriendos (Rentals) and Ventas (Sales).
**Location:** All properties in Antofagasta.

### Sample Listings

| Property | Type | Price | Size | Rooms | Baths | Location |
|---|---|---|---|---|---|---|
| Osvaldo Silva Castellon 142 | Arriendo | $1,800,000 CLP | — | House | — | Antofagasta |
| Solución Habitacional Corporativa (Antilhue 1302) | Arriendo | $790,000 CLP | — | — | — | Antofagasta |
| Vista al Mar (Cerro Paranal) | Arriendo | $1,000,000 CLP | — | — | — | Av. Cerro Paranal |
| Oasis Frente al Mar (Cerro Paranal 380) | Venta | $6,600 UF | 104m² | 3 | 2 | Cerro Paranal |
| Exclusividad en Corazón de Antofagasta | Arriendo | $1,000,000 CLP | — | — | — | Av. Balmaceda 2415 |

### Property Card Features
Each listing card displays: Area (m²), Parking, Bedrooms, Bathrooms, Price (CLP or UF), Address, Listing type badge (ARRIENDO/VENTA), and Pro Home branding.

---

## 12. Internal Admin / Client Portal (Protected Routes)

The website contains protected routes for internal property management and client-facing dashboards:

| Route | Purpose |
|---|---|
| `/login` | Admin/Owner authentication |
| `/administracion` | Main administration dashboard with search, property tables, expense tables |
| `/crearpropiedad` | Create new property listing (with Leaflet map integration) |
| `/editarpropiedad/:id` | Edit existing property (with map) |
| `/metricas/:propertyname` | Property performance metrics with Chart.js bar charts |
| `/informe/:propertyname` | Detailed property reports with bar, line, pie charts + expense tables and HTML-to-canvas export |
| `/editar/*` | CMS-style editors for all public pages (home, services, contact, navbar, etc.) |

### Internal Features Identified
- **Chart Types:** Bar charts, Line charts, Pie charts (including dark mode variants and money-specific charts)
- **Data Export:** html2canvas for generating report images/PDFs
- **Expense Tracking:** Regular and Extraordinary expense tables
- **Content Management:** Route-based CMS allowing editing of all public-facing pages
- **Google OAuth:** OAuth2 callback route for Google Reviews integration

---

## 13. SEO & Technical Issues Identified

| Issue | Severity | Detail |
|---|---|---|
| No Server-Side Rendering | 🔴 Critical | SPA renders blank `<h1>` on initial load — Google sees empty page |
| Wrong `lang` attribute | 🟡 Medium | `<html lang="en">` but all content is Spanish |
| No `<meta description>` | 🔴 Critical | Zero meta descriptions on any page |
| No Open Graph tags | 🟡 Medium | Social shares have no preview image/description |
| No structured data | 🟡 Medium | No JSON-LD for LocalBusiness, RealEstateListing, or FAQs |
| No `<title>` per page | 🔴 Critical | All pages share the same generic "Pro Home" title |
| No sitemap.xml | 🟡 Medium | No XML sitemap for search engines |
| No robots.txt | 🟡 Medium | Missing directives for crawlers |
| Admin routes exposed | 🟡 Medium | `/login`, `/administracion`, `/editar/*` discoverable in client JS bundle |

---

## 14. Instagram Profile Summary

| Attribute | Detail |
|---|---|
| **Handle** | `@_pro_home_` |
| **Display Name** | PRO-HOME |
| **Category** | Real Estate |
| **Bio** | "Expertos en Contratos B2B e Inversión 📈 🔑Ventas 🔑Arriendo Diario y Mensual 🔑Adm Integral" |
| **Posts** | 322 |
| **Followers** | 2,857 |
| **Following** | 6,890 |
| **Address** | Balmaceda 2455 Oficina 1209, Antofagasta, Chile |
| **Story Highlights** | Sala de Ventas, Arriendos, Ventas, Exponor, Amoblados, Arriendo Diario, Servicios |
| **Content Style** | Professional property showcase cards with branded templates (green/gray gradient headers, property specs grid, contact numbers) |

---

## 15. Key Business Intelligence

### Competitive Advantages
1. **B2B Focus:** Unlike most Chilean proptech, Pro Home specifically targets corporate clients (mining, energy, lithium companies) needing employee housing
2. **Full-Service Model:** End-to-end from property acquisition → furnishing → management → reporting
3. **Premium Positioning:** High-quality Instagram content, branded listing templates, downloadable company profile
4. **Established Client Base:** 12+ named corporate clients including international companies (SKF, CJR Renewables, CleanTech Lithium)

### Market Context (Antofagasta)
- **Economy:** Chile's mining capital — copper & lithium operations drive massive demand for temporary corporate housing
- **Exponor:** One of South America's largest mining expos, held in Antofagasta, creates periodic spikes in accommodation demand
- **Price Range:** Properties listed between $790,000 – $1,800,000 CLP/month for rentals; 6,600 UF (~$250K USD) for sales
