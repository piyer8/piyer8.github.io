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
- `/` — renders `Header` + `Home` (hero) + `CaseStudies` (work list) + `About` + `Contact` in a single scrollable page
- `/case-study/:slug` — renders a standalone case study page with its own `Header`

**Homepage sections** (each is a `<section>` with an `id` for smooth-scroll anchoring):
- `Home.jsx` — 100vh hero: eyebrow, large editorial name ("Pranav / Iyer."), subtitle, "Scroll ↓" pinned bottom-right
- `CaseStudies.jsx` — `id="work"` — numbered vertical list of projects with hover thumbnail reveal
- `About.jsx` — `id="about"` — two-column bio + capabilities list
- `Contact.jsx` — `id="contact"` — dark background (`--ink`), heading, email link, social links, copyright

**Scroll animations**: `IntersectionObserver` in `App.jsx` watches `.reveal` elements and adds `.visible` class; defined in `src/index.css`.

**Case studies**: Each project has its own file (e.g., `MayoClinicCaseStudy.jsx`) that wraps the generic `CaseStudy` component (`src/components/CaseStudy.jsx`). `CaseStudy` accepts `title`, `description` (used as mono tag line), `overview`, `thumbnail`, `slides[]`, optional `content`, and optional `nextProject: { title, path }`. Slides are rendered full-width stacked (no longer horizontal scroll).

**Adding a new case study**:
1. Create `src/components/[Name]CaseStudy.jsx` wrapping `<CaseStudy>`
2. Add a route in `src/App.jsx`
3. Add an entry to the `works` array in `src/components/CaseStudies.jsx`
4. Place images in `public/[Name]/`

**Static assets**: Images are served from `public/` and referenced with root-relative paths (e.g., `/Mayo/Slide 1.png`).

## Design system

CSS custom properties defined in `src/index.css`:

| Token | Value | Use |
|---|---|---|
| `--stone` | `#E8E4DC` | Background |
| `--ink` | `#1C1917` | Primary text |
| `--red` | `#D94F3D` | Accent / hover |
| `--chalk` | `#F5F2EC` | Secondary bg (About section) |
| `--dust` | `#6B6457` | Muted text, labels |
| `--section-pad-v` | `120px` (64px mobile) | Section vertical padding |
| `--max-width` | `1200px` | Content width |
| `--ease` | `cubic-bezier(0.16, 1, 0.3, 1)` | All transitions |

**Typography**: `futura-pt` (Adobe Fonts / Typekit) for display and body. `"SF Mono", "Monaco", "Inconsolata", "Fira Code", monospace` for all mono labels (10–12px, uppercase, `letter-spacing: 0.12em`). No `@font-face` changes needed.

**Rules**: No `border-radius` anywhere. Sharp corners throughout. Body text: 15px / 1.7 line-height.
