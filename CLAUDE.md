# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start local dev server (Vite)
npm run build     # Build for production (output: dist/)
npm run lint      # Run ESLint
npm run preview   # Preview the production build locally
npm run deploy    # Build + deploy to GitHub Pages via gh-pages
```

## Architecture

This is a React + Vite single-page portfolio site for Pranav Iyer (piyer8.github.io), deployed via `gh-pages`.

**Routing** (`src/App.jsx`): React Router handles two layouts:
- `/` — renders `Header` + `Home` + `CaseStudies` in a single scrollable page
- `/case-study/:slug` — renders a standalone case study page with its own `Header`

**Home page** (`src/components/Home.jsx`): Self-contained component with a greeting, name (`Pranav Iyer`), and a short description. The `src/components/Home/` directory contains `Blurb.jsx`, `About.jsx`, and `Contact.jsx` sub-components but they are currently unused by `Home.jsx`.

**Case studies**: Each case study has its own file (e.g., `MayoClinicCaseStudy.jsx`) that wraps the generic `CaseStudy` component (`src/components/CaseStudy.jsx`). `CaseStudy` accepts `title`, `description`, `overview`, `thumbnail`, `slides[]`, and optional `content`. The slides container intercepts vertical scroll events and redirects them to horizontal scrolling.

**Adding a new case study**:
1. Create `src/components/[Name]CaseStudy.jsx` wrapping `<CaseStudy>`
2. Add a route in `src/App.jsx`
3. Add an entry to the `caseStudies` array in `src/components/CaseStudies.jsx`
4. Place images in `public/[Name]/`

**Static assets**: Images are served from `public/` and referenced with root-relative paths (e.g., `/Mayo/Slide 1.png`).

**Styling**: Plain CSS files co-located with components. Global styles (font, colors, background) are set in `src/index.css`. Primary color is `#454545` on `#EDEDED` background. Font is `futura-pt` (Adobe Fonts / Typekit).
