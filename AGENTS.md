# Nexus Energy

A marketing and product showcase website for Nexus Energy, a company focused on advanced battery systems and energy storage solutions for railways (Vande Bharat trains), drones, commercial, and industrial sectors. Built as a multi-page React SPA with 3D visuals and smooth scrolling.

## Tech Stack

- **Language:** TypeScript
- **Framework:** React 18 with Vite
- **Routing:** React Router DOM v6
- **UI:** Tailwind CSS, Radix UI primitives, shadcn/ui, Framer Motion
- **3D Graphics:** Three.js (with GLTFLoader, EffectComposer, OutlinePass)
- **Smooth Scrolling:** Lenis
- **Forms/Email:** React Hook Form, Zod, EmailJS (`@emailjs/browser`)
- **Data Fetching:** TanStack React Query
- **Build Tool:** Vite with SWC plugin

## Setup

```bash
npm install
```

Requires EmailJS credentials (service ID, template ID, public key) configured in `src/components/ContactForm.tsx` for the contact form to work.

## Build / Run / Test

```bash
# Development server
npm run dev

# Production build
npm run build

# Preview production build locally
npm run preview

# Lint
npm run lint
```

## Project Structure

```
src/
  App.tsx              — Root component with all routes defined
  pages/               — Full-page route components
    Index.tsx          — Home page with interactive 3D background (Three.js)
    About.tsx          — Company about page
    Services.tsx       — Services overview
    services/          — Individual service detail pages (web, VR/AR, 3D, etc.)
    solutions/         — Product solution pages (Railways, Drones, Commercial, etc.)
    Team.tsx           — Team page
    Contact.tsx        — Contact page
    Portfolio.tsx      — Portfolio/projects page
    VandeBharat.tsx    — Vande Bharat train-specific page
  components/          — Reusable UI components
    Navbar.tsx         — Site navigation
    Footer.tsx         — Site footer
    BatteryAnimation.tsx — Animated battery component
    ContactForm.tsx    — EmailJS-powered contact form
    LenisSmoothScroll.tsx — Lenis smooth scroll wrapper
    GlowCard.tsx/GlowEffect.tsx — Visual effects components
  assets/              — Images and static assets
  constants/           — Shared constants (images.js, index.js)
  lib/                 — Utility functions
```

## Architecture & Key Files

- `src/App.tsx` — defines all routes; wraps app in QueryClientProvider, TooltipProvider, and LenisSmoothScroll
- `src/pages/Index.tsx` — most complex page; includes an interactive Three.js 3D background with a GLTF model, post-processing (OutlinePass), and mouse interaction
- `src/components/ContactForm.tsx` — EmailJS integration for sending contact messages
- `vite.config.ts` — Vite config with React SWC plugin and `@/` path alias
- `vercel.json` — Vercel deployment config

## Conventions & Notes for Agents

- Path alias `@/` maps to `src/`. Use it for all internal imports.
- shadcn/ui components live in `src/components/ui/`. Do not edit generated shadcn files directly; regenerate via CLI if needed.
- Tailwind config is in `tailwind.config.ts`; custom animations and colors are defined there.
- The `lovable-tagger` dev dependency is a Lovable.dev integration hook — it runs during dev; ignore it for non-Lovable workflows.
- Three.js scene setup is inlined in `Index.tsx` — if extracting to a separate hook/component, keep refs stable across re-renders.
- EmailJS keys are hardcoded in `ContactForm.tsx` — move to environment variables before any production deployment.
- No test suite is present in this repo.
- `bun.lockb` is present alongside `package-lock.json`; use npm (the lock file is npm-generated) unless switching to Bun intentionally.
