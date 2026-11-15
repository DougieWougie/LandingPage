# Forage CTA — App Spotlight Section

## Overview

Add a spotlight section advertising [Forage](https://github.com/DougieWougie/forage), a native Android RSS reader, between the Hero and the Projects grid. It is a full section rather than a fourth project card, so the app gets a banner, a short pitch and a real install button.

## Visual Design

- A single card (`--bg-card`, `--border`, `--radius-lg`), max width 900px to match the Projects and Skills containers
- The Forage banner runs edge to edge across the top of the card. The artwork is dark and is shown unchanged in both themes
- Below it: a heading, a one-line pitch, three feature pills and the actions
- Primary action: a gold pill button, "Get it on Google Play", with dark text (`--on-accent`, 7.7:1 on `--gold`, 10.4:1 on the dark-mode gold)
- Secondary action: a "Source on GitHub" text link in `--gold-text`

No Google Play badge artwork is used; the button is plain text with a generic triangle icon.

## Content

Copy lives in `src/content/forage.md` (an `h2`, a `p` and a `ul`), rendered at build time like the other content files. `ForageCta.css` styles those raw elements under `.forage__content`, so the structure of the file matters.

## Links

- Google Play: `https://play.google.com/store/apps/details?id=me.dougals.forage`
- Source: `https://github.com/DougieWougie/forage`

Both open in a new tab with `rel="noopener noreferrer"`.

## Assets

`public/forage-banner.webp` (1600×529) and `public/forage-banner-800.webp`, converted from `docs/banner.jpg` in the Forage repo. They are self-hosted because the CSP only allows images from `'self'`. The image is lazy-loaded with explicit dimensions, as the section sits below the fold.

## Animation

The section fades and slides in once via `useInView`, toggling `forage--visible`. The global `prefers-reduced-motion` rule in `index.css` covers it.

## Component Structure

**New files:**
- `src/components/ForageCta.jsx`
- `src/components/ForageCta.css`
- `src/content/forage.md`
- `public/forage-banner.webp`, `public/forage-banner-800.webp`

**Modified files:**
- `src/App.jsx` — render `<ForageCta />` between `<Hero />` and `<FeaturedLinks />`
- `src/index.css` — add `--on-accent` to both theme blocks
- `docs/colour-palette.md` — document `--on-accent`
