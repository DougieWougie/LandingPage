# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A single-page personal landing page (React 19 + Vite 7, plain JS/JSX, no TypeScript, no router, no test framework). Deployed as a static bundle served by nginx in a Docker container.

## Commands

```bash
npm install
npm run dev        # Vite dev server on http://localhost:5173
npm run build      # outputs to dist/
npm run preview    # serve the production build locally
npm run lint       # eslint . (flat config, react-hooks + react-refresh rules)
```

There are no tests. `npm run lint` is the only automated check; run it before committing.

Docker (nginx runs as non-root uid 101, so the container port must be >= 1024):

```bash
docker build -t dougie-landing-page .
docker run -p 8080:8080 dougie-landing-page
# custom port: docker build --build-arg PORT=3000 ...
```

## Architecture

- **Content is markdown, rendered to HTML at build time.** `src/content/intro.md` and `src/content/skills.md` are imported as plain `.md` modules; the `markdown-to-html` plugin in `vite.config.js` runs `marked` on them and exports an HTML string, so no markdown parser ships to the browser. Components inject it with `dangerouslySetInnerHTML` (safe because the content is repo-owned). Editing copy means editing those files, not JSX. `Skills.css` styles the raw `h2`, `p`, `ul` and `li` elements under `.skills__content`, so the structure of `skills.md` matters.
- **Theming** is CSS custom properties in `src/index.css`. `:root` holds the light palette; `[data-theme="dark"]` overrides it. `useTheme` sets `data-theme` on `<html>`, persisting to localStorage and falling back to `prefers-color-scheme`. New colours must be defined in both blocks.
- **Scroll-in animations** use `useInView` (one-shot IntersectionObserver). Components toggle a `--visible` BEM modifier class; CSS does the animation. `BlogCta` also honours `prefers-reduced-motion` by skipping its typing animation.
- **Styling convention**: one CSS file co-located per component, BEM-style class names (`block__element--modifier`). No CSS modules, no CSS-in-JS.
- **Fonts** are self-hosted woff2 files in `public/fonts/`, preloaded in `index.html`. The CSP in `security-headers.conf` only allows `'self'` for fonts, scripts, and connections, so any external resource will be blocked in production. Inline styles are allowed; inline scripts are not.
- **Build-time version**: `vite.config.js` defines `__SITE_VERSION__` from `git describe --tags --always`, falling back to the `SITE_VERSION` env var (set by the Dockerfile / CI). It is a declared ESLint global and rendered in `Footer.jsx`.

## Deployment

Push to `main` triggers `.github/workflows/deploy.yml`: builds the Docker image, pushes to `ghcr.io/dougiewougie/landingpage`, then SSHes to the server and runs `docker compose pull && up -d` from `/opt/docker/landing/`. `docker-compose.yml` in the repo is the file copied to the server.

nginx notes: `security-headers.conf` is `include`d in every `location` block because nginx drops inherited `add_header` directives once a block adds its own (for `Cache-Control`). Add the include to any new location block.

## Design docs

`docs/superpowers/specs/` and `docs/superpowers/plans/` hold feature specs and implementation plans (currently the Blog CTA). Check there for intent before changing a component's behaviour.
