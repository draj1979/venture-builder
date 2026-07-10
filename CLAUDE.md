# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (Vite HMR)
npm run build     # Production build
npm run preview   # Preview production build locally
npm run lint      # Run ESLint
```

No test suite is configured.

## Architecture

This is the marketing/portfolio website for **Inferex AI**, a venture builder that co-builds AI-first companies. It is a React 19 SPA built with Vite, deployed on Vercel.

**Routing** — `src/App.jsx` defines all routes via `react-router-dom`. Every route is wrapped in `<Layout>`, which renders `AnnouncementBanner → Navbar → <main> → Footer`.

**Pages** (`src/pages/`):
- `Home` — hero + 3 featured portfolio companies + manifesto teaser
- `Portfolio` — full grid of all ventures using `CompanyCard`
- `Model` — explains the venture builder model
- `BuildWithUs` — intake/CTA page for founders
- `About` — company manifesto/team page
- `Contact` — contact form page

**Portfolio data** — all 25+ ventures are defined as a single exported array in `src/data/portfolio.js`. Each entry has `name`, `category`, `problem`, `description`, and `url`. Adding or editing a venture means editing only this file.

**SEO** — the `SEO` component (`src/components/SEO.jsx`) wraps `react-helmet-async`'s `<Helmet>`. Every page renders `<SEO title="..." description="..." canonical="/path" />` for meta tags and Open Graph. The base site URL is hardcoded as `https://kartavyatech.com` inside `SEO.jsx`.

**Styling** — plain CSS files colocated with each component/page (e.g. `Navbar.css` alongside `Navbar.jsx`). Global styles and CSS variables (colors, spacing) live in `src/index.css`. No CSS framework or preprocessor is used.

**Deployment** — `vercel.json` configures a catch-all rewrite to `index.html` for client-side routing. Deployments go to Vercel automatically on push to `main`.
