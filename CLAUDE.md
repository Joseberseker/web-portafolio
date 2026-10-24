# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal portfolio site for Jose Ahumada (React + Vite + Tailwind). Single-page app with section-based navigation (Hero, Proyectos, Sobre Mí, Experiencia, Contacto).

## Commands

- `npm run dev` — start Vite dev server
- `npm run build` — production build (outputs to `dist/`)
- `npm run preview` — preview the production build locally
- `npm run lint` — run ESLint over the project

There is no test suite configured in this repo.

Note: `npm run lint` currently reports false-positive `no-unused-vars` errors for `motion` (from `framer-motion`) in several files (`Hero.jsx`, `Contact.jsx`, `AboutMe.jsx`, `Proyectos.jsx`, `TimeLine.jsx`, `ProjectCard.jsx`, `CardTimeLine.jsx`). This is because `eslint.config.js` does not include `eslint-plugin-react`, so core ESLint can't see that `motion` is used via JSX (e.g. `<motion.div>`). `motion` is in fact used in all of these files — don't "fix" the false positive by removing the import.

## Architecture

- **Entry point**: `src/main.jsx` renders `src/App.jsx`, which composes all top-level page sections inside `<main>`.
- **Two component tiers** under `src/components/`:
  - `pages/` — one section per page area (`Hero`, `Proyectos`, `AboutMe`, `TimeLine`, `Contact`, `Header`, `Footer`), each with its own co-located `.jsx` + `.css`. These are rendered directly by `App.jsx`.
  - `layouts/` — smaller presentational pieces used inside a page section (e.g. `ProjectCard` inside `Proyectos`, `CardTimeLine` inside `TimeLine`).
- **Content/data is centralized** in `src/data/portfolio.js` — `profile`, `navItems`, `skills`, `techTags`, `projects`, `experience`. Page components import from here rather than hardcoding copy; when updating site content (bio, project list, experience entries, nav labels), edit this file first.
- **Section navigation uses anchor IDs that match `navItems[].id`** (e.g. `id="Mis Proyectos"`, `id="Sobre Mí"`) — these contain spaces/accents and are consumed via `href="#${item.id}"` in both `Header.jsx` and the side-nav in `App.jsx`. If you rename a section id in `portfolio.js`, the corresponding `id` attribute on that page section must be updated too (they're not derived from the same source).
- **Dead code exists and should not be treated as reference**: `src/layouts/CardTimeLine/CardTimeLine.jsx` (stale duplicate of the one under `components/layouts/`), `src/components/layouts/MenuBar/ItemBar.jsx` (superseded by `Header.jsx`'s inline nav), and `src/components/layouts/FormContact/FormContact.jsx` (empty placeholder — the real contact form is `components/pages/Contact/Contact.jsx`). Don't extend these; either ignore or remove them.
- **Contact form** (`components/pages/Contact/Contact.jsx`) sends mail via `@emailjs/browser` with the EmailJS service ID, template ID, and public key hardcoded inline. If rotating these, also check the "Allowed origins" setting in the EmailJS dashboard.
- **Animations**: `framer-motion` is used throughout page sections via `motion.*` wrapper elements with `initial`/`whileInView`/`animate` props for scroll-triggered fade/slide-in effects — follow this existing pattern for new sections rather than introducing a different animation approach.
- **Styling**: Tailwind CSS v4 (via `@tailwindcss/vite`) plus per-component hand-written CSS files co-located with their `.jsx`. `daisyui` is a devDependency but not confirmed to be actively used — check before relying on its component classes.
- **Icons**: `boxicons` (loaded via CDN link in `index.html`, used as `<i className="bx bx-...">`) and `react-icons` are both present in the codebase — check which an existing section already uses before adding a new icon dependency.
