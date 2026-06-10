# Marsven One — Digital Marketing Agency Website

A modern, premium, conversion-focused marketing website built with **React + TypeScript + Tailwind CSS + Framer Motion**, featuring a **Three.js 3D hero**, glassmorphism UI, scroll-triggered animations and a fully responsive, dark, SaaS-grade design.

> Built to look and convert like a premium agency commanding ₹1 lakh+ / month clients.

## ✨ Features

- **6 pages** — Home, Services, Case Studies, About, Blog, Contact
- **3D animated hero** — metallic distorted core + orbiting shapes + sparkles (`@react-three/fiber` + `drei`)
- **Interactive 3D tilt cards** with cursor-tracking glare
- **Scroll-triggered reveals**, animated counters, page transitions
- **Glassmorphism** surfaces and premium royal-blue gradients (brand palette from the logo)
- **Sticky glass navigation** with animated active indicator + mobile menu
- **Testimonials carousel**, certifications marquee, animated stats
- **Lead-capture forms** (Name, Email, Phone, Company, Service, Message)
- **WhatsApp floating button**, scroll-to-top, **Calendly placeholder**, newsletter signup
- **SEO-ready** — meta tags, Open Graph, JSON-LD, semantic HTML, `robots.txt`
- **Accessible** — keyboard focus states, ARIA labels, `prefers-reduced-motion` support
- **Performance** — lazy-loaded routes + code-split 3D bundle

## 🚀 Getting started

```bash
npm install      # install dependencies
npm run dev      # start dev server (http://localhost:5173)
npm run build    # production build → dist/
npm run preview  # preview the production build
```

Requires **Node 18+** (tested on Node 22).

## 🗂️ Project structure

```
src/
├─ components/        # Reusable building blocks
│  ├─ layout/         # Navbar, Footer, FloatingActions
│  ├─ three/          # HeroScene (Three.js)
│  └─ ui/             # TiltCard, Reveal, cards, counters, marquee…
├─ sections/          # Home page sections (Hero, Stats, Services, …)
├─ pages/             # Routed pages
├─ data/site.ts       # 👈 All marketing copy, services, stats, case studies
├─ lib/utils.ts       # Helpers
└─ index.css          # Tailwind layers + design system
```

## ✏️ Customizing content

Almost all copy lives in **`src/data/site.ts`** — company name, phone, email, WhatsApp number,
Calendly URL, services, stats, case studies, testimonials, team and blog posts. Edit there and the
whole site updates.

Brand colors live in **`tailwind.config.js`** under `theme.extend.colors.brand`.

## 🔌 Things to wire up before launch

- **Contact form** → connect `src/components/ContactForm.tsx` to your CRM / form backend (Formspree, HubSpot, etc.)
- **Calendly** → set `COMPANY.calendly` in `src/data/site.ts`
- **WhatsApp** → set `COMPANY.whatsapp` (digits only)
- **Google Maps** → embed in the placeholder on the Contact page
- **Analytics** → add GA4 / Pixel scripts in `index.html`

## 📦 Deploy

The app is a static SPA. Deploy `dist/` to Vercel, Netlify, Cloudflare Pages, etc.
A `public/_redirects` file is included for SPA fallback routing on Netlify.
# marsvenone
