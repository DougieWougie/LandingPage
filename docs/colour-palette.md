# Colour palette

The colours used on dougals.me, for reuse in WordPress, Ghost and similar platforms.
Source of truth: `src/index.css` (`:root` for light mode, `[data-theme="dark"]` for dark mode).
If you change a colour there, update this file too.

## Brand accents

Taken from the profile picture. Light mode uses the base shades. Dark mode swaps each
accent to its lighter shade, so that it stays readable on the dark background.

| Name | Dark shade | Base (light mode) | Light shade (dark mode) |
|---|---|---|---|
| Gold | `#B8912E` | `#D4A843` | `#E8C76A` |
| Olive | `#4F5D2A` | `#6B7D3A` | `#8FA04E` |
| Terracotta | `#A5603B` | `#C47A52` | `#D9956F` |

Gold is the main accent: links, focus and hover states, text selection and the scrollbar.
Olive and terracotta are secondary accents: category colours on the project cards and
skill groups, and stops in gradients.

### Text accents

The base accents are too light to read as text on the light backgrounds (see
[Contrast](#contrast-wcag-2x)). So text in an accent colour (links, hover text) uses a
separate `-text` token. In light mode it's a darker shade; in dark mode it's the same as
the accent.

| Token | Light mode | Dark mode |
|---|---|---|
| `--gold-text` | `#82631E` | `#E8C76A` |
| `--olive-text` | `#4F5D2A` | `#8FA04E` |
| `--terracotta-text` | `#9A5835` | `#D9956F` |

## Light mode

| Role | CSS variable | Value |
|---|---|---|
| Page background | `--bg-primary` | `#FAF7F2` |
| Secondary background (sections, scrollbar track) | `--bg-secondary` | `#F0EBE1` |
| Card background | `--bg-card` | `#FFFFFF` |
| Primary text / headings | `--text-primary` | `#1A1A2E` |
| Secondary text | `--text-secondary` | `#4A4A5A` |
| Muted text (captions, meta) | `--text-muted` | `#7A7A8A` |
| Border | `--border` | `rgba(26, 26, 46, 0.1)` |
| Shadow | `--shadow` | `rgba(26, 26, 46, 0.08)` |
| Strong shadow (hover) | `--shadow-strong` | `rgba(26, 26, 46, 0.15)` |
| Accent: gold | `--gold` | `#D4A843` |
| Accent: olive | `--olive` | `#6B7D3A` |
| Accent: terracotta | `--terracotta` | `#C47A52` |
| Link / accent text: gold | `--gold-text` | `#82631E` |
| Accent text: olive | `--olive-text` | `#4F5D2A` |
| Accent text: terracotta | `--terracotta-text` | `#9A5835` |

## Dark mode

| Role | CSS variable | Value |
|---|---|---|
| Page background | `--bg-primary` | `#1A1A2E` |
| Secondary background | `--bg-secondary` | `#232340` |
| Card background | `--bg-card` | `#2A2A45` |
| Primary text / headings | `--text-primary` | `#F0EBE1` |
| Secondary text | `--text-secondary` | `#C0BDB5` |
| Muted text | `--text-muted` | `#8A8898` |
| Border | `--border` | `rgba(240, 235, 225, 0.1)` |
| Shadow | `--shadow` | `rgba(0, 0, 0, 0.2)` |
| Strong shadow (hover) | `--shadow-strong` | `rgba(0, 0, 0, 0.4)` |
| Accent: gold | `--gold` | `#E8C76A` |
| Accent: olive | `--olive` | `#8FA04E` |
| Accent: terracotta | `--terracotta` | `#D9956F` |
| Link / accent text: gold | `--gold-text` | `#E8C76A` |
| Accent text: olive | `--olive-text` | `#8FA04E` |
| Accent text: terracotta | `--terracotta-text` | `#D9956F` |

The two modes are inverses of each other: the dark page background is the light mode text
colour (`#1A1A2E`), and the dark mode text is the light secondary background (`#F0EBE1`).

## Gradients

- **Name highlight** (text): `linear-gradient(135deg, var(--gold), var(--terracotta))`
- **Portrait backdrop**: `linear-gradient(135deg, var(--gold), var(--olive), var(--terracotta))`

## Terminal panel (blog call-to-action)

This panel stays dark in both modes.

| Role | Value |
|---|---|
| Background | `#1A1A2E` |
| Border | `rgba(212, 168, 67, 0.3)` (gold at 30%) |
| Title bar | `rgba(255, 255, 255, 0.05)` |
| Prompt | `#27C93F` |
| Dim text | `#888888` |
| Body text | `#E0E0E0` |
| Link underline | `rgba(212, 168, 67, 0.4)` (gold at 40%) |

## Contrast (WCAG 2.x)

WCAG AA asks for a contrast ratio of at least 4.5:1 for body text and 3:1 for large text.

**Light mode, on the `#FAF7F2` page background**

| Foreground | Ratio | Body text |
|---|---|---|
| Primary text `#1A1A2E` | 16.0 | pass |
| Secondary text `#4A4A5A` | 8.1 | pass |
| Muted text `#7A7A8A` | 4.0 | large text only |
| Gold `#D4A843` | 2.1 | **fail** |
| Gold dark `#B8912E` | 2.8 | **fail** |
| Olive `#6B7D3A` | 4.3 | large text only |
| Olive dark `#4F5D2A` | 6.7 | pass |
| Terracotta `#C47A52` | 3.1 | large text only |
| Terracotta dark `#A5603B` | 4.5 | pass (just) |
| Gold text `#82631E` | 5.2 | pass |
| Terracotta text `#9A5835` | 5.1 | pass |

**Dark mode, on the `#1A1A2E` page background**

| Foreground | Ratio | Body text |
|---|---|---|
| Primary text `#F0EBE1` | 14.4 | pass |
| Secondary text `#C0BDB5` | 9.1 | pass |
| Muted text `#8A8898` | 4.9 | pass |
| Gold `#E8C76A` | 10.4 | pass |
| Olive `#8FA04E` | 5.9 | pass |
| Terracotta `#D9956F` | 6.9 | pass |

Muted text, olive and terracotta score lower on the dark card background (`#2A2A45`),
at 4.0 to 5.6.

The `-text` shades score 4.6 or higher on every light background, including
`#F0EBE1` and `#FFFFFF`.

**Using these on a blog:** use the `-text` tokens for links and any other accent-coloured
text; `#82631E` is the natural link colour. Keep the base accents for fills, borders and
highlights (dark text `#1A1A2E` on a gold fill scores 7.7).

The large gradient on the hero name (gold to terracotta) is still below 3:1 in light mode.
It's left as it is because it's a decorative display heading.

## Copy-paste CSS

```css
:root {
  --gold: #D4A843;
  --olive: #6B7D3A;
  --terracotta: #C47A52;
  --gold-text: #82631E;
  --olive-text: #4F5D2A;
  --terracotta-text: #9A5835;

  --bg-primary: #FAF7F2;
  --bg-secondary: #F0EBE1;
  --bg-card: #FFFFFF;
  --text-primary: #1A1A2E;
  --text-secondary: #4A4A5A;
  --text-muted: #7A7A8A;
  --border: rgba(26, 26, 46, 0.1);
}

a {
  color: var(--gold-text);
}

@media (prefers-color-scheme: dark) {
  :root {
    --gold: #E8C76A;
    --olive: #8FA04E;
    --terracotta: #D9956F;
    --gold-text: #E8C76A;
    --olive-text: #8FA04E;
    --terracotta-text: #D9956F;

    --bg-primary: #1A1A2E;
    --bg-secondary: #232340;
    --bg-card: #2A2A45;
    --text-primary: #F0EBE1;
    --text-secondary: #C0BDB5;
    --text-muted: #8A8898;
    --border: rgba(240, 235, 225, 0.1);
  }
}
```

The site itself switches with a `data-theme` attribute on `<html>`, so visitors can override
their OS setting. The `prefers-color-scheme` version above is the simpler choice for a theme
that has no toggle.
