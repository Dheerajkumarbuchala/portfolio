# Portfolio — CLAUDE.md

## Project Overview

A personal developer portfolio website built with vanilla HTML, CSS, and JavaScript. No build tools, no dependencies, no frameworks.

## Structure

```
portfolio/
├── index.html    # Single-page app — all sections live here
├── css/style.css # All styles, animations, custom properties
└── js/main.js    # Skill tabs, cursor, counters, scroll animations
```

## Key Design Decisions

- **Zero dependencies** — pure web standards, no npm, no build step
- **Dark futuristic theme** — CSS custom properties drive the color system:
  - `--neon: #00f5c4` (teal)
  - `--neon2: #7b2fff` (purple)
  - `--neon3: #ff2d78` (pink)
- **Single HTML file** — all sections (hero, about, projects, skills, contact) in `index.html`

## Sections in index.html

1. **Hero** — animated title, CTA buttons, stat counters (animated with IntersectionObserver)
2. **About** — bio text + terminal-style widget
3. **Projects** — 3 project cards with tags and links
4. **Skills** — tabbed categories (Backend, Frontend, Cloud, Databases) with animated bars
5. **Contact** — email, GitHub, LinkedIn, Twitter links

## JavaScript Architecture (js/main.js)

- Skill data is a plain object; categories rendered dynamically on tab click
- Custom cursor: 12px dot + 36px lagging ring tracked via `mousemove`
- Counters animate 0 → target when scrolled into view (IntersectionObserver)
- Scroll-triggered fade-up animations via IntersectionObserver
- Mobile nav burger toggle

## Deployment

Static files — deploy directly to GitHub Pages or any static host. No build step required.
