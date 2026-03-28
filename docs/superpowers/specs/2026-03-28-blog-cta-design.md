# Blog CTA — Terminal-Style Call to Action

## Overview

Add a compact, terminal-styled call-to-action below the Hero intro that draws attention to [blog.dougals.me](https://blog.dougals.me). The CTA looks like an inline shell command with a typing animation, signalling "developer" without being garish.

## Visual Design

- Dark background pill with a subtle gold border (`--gold` at ~30% opacity)
- Monospace font displaying: `$ curl blog.dougals.me`
- Green `▶` indicator on the left side
- `$` prompt in muted grey
- `curl` in light text, URL in gold
- Blinking block cursor at the end

The component uses the existing CSS custom properties so it adapts to light and dark themes automatically. In light mode the dark pill provides contrast against the warm background; in dark mode it blends naturally.

## Animation

- A typing animation plays once when the element scrolls into view
- Triggered via IntersectionObserver (threshold ~0.5, fires once)
- Characters appear one at a time at a steady cadence (~60ms per character)
- After the full command is typed, the blinking cursor remains indefinitely
- The green `▶` and `$` prompt are visible immediately (not typed)
- Only the command text (`curl blog.dougals.me`) is typed out

## Interaction

- The entire CTA is wrapped in an anchor tag linking to `https://blog.dougals.me` (opens in new tab)
- On hover: the gold border brightens slightly and the cursor changes to pointer
- The URL portion has a subtle underline offset for affordance

## Component Structure

**New files:**
- `src/components/BlogCta.jsx` — React component with typing animation logic
- `src/components/BlogCta.css` — Styles

**Modified files:**
- `src/components/Hero.jsx` — Import and render `<BlogCta />` after the `hero__intro` div, inside `hero__content`

## Component Details

### BlogCta.jsx

- Uses `useRef` + `useEffect` with IntersectionObserver to detect when visible
- Maintains state for how many characters of the command text have been revealed
- Once triggered, a `setInterval` (~60ms) reveals one character at a time
- After all characters are shown, the interval clears and the blinking cursor remains
- The green arrow and `$` prompt render statically (not part of the typing sequence)
- The entire component is an `<a>` tag pointing to `https://blog.dougals.me` with `target="_blank"` and `rel="noopener noreferrer"`

### BlogCta.css

- `.blog-cta` — the outer link element, styled as an inline-flex pill
  - Dark background (uses `--bg-primary` in dark mode, hardcoded dark in light mode for contrast)
  - Border: `1px solid` using `--gold` at 30% opacity
  - `border-radius: var(--radius-sm)`
  - `padding: 14px 24px`
  - `font-family: 'Courier New', monospace`
  - `font-size: ~15px`
  - `margin-top: var(--space-lg)`
  - `display: inline-flex; align-items: center; gap: 12px`
  - `transition` on border-color for hover
- `.blog-cta:hover` — border-color brightens to full `--gold`
- `.blog-cta__arrow` — green `▶`, small font size
- `.blog-cta__prompt` — muted grey `$`
- `.blog-cta__text` — light text for `curl `, overflow hidden
- `.blog-cta__url` — gold coloured, subtle underline-offset
- `.blog-cta__cursor` — blinking block cursor via `@keyframes blink` (step-end, 1s cycle)
  - `width: 2px; height: 18px; background: var(--gold)`

### Hero.jsx changes

Insert `<BlogCta />` immediately after the `hero__intro` conditional block, still inside `hero__content`:

```jsx
{!loading && content && (
  <div className="hero__intro">
    <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
  </div>
)}
<BlogCta />
```

## Accessibility

- The `<a>` tag has meaningful link text (the visible command)
- `aria-label="Read my blog"` on the link for screen readers
- The `▶` indicator is decorative (`aria-hidden="true"`)
- Animation is CSS/JS only, no ARIA live region needed
- Respects `prefers-reduced-motion`: skip the typing animation and show the full text immediately

## No Other Changes

No modifications to `index.css`, `App.jsx`, or any other existing component. The CTA inherits the site's design tokens and slots into the existing Hero layout.
