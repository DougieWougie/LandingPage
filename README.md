# Dougie Richardson — Personal Landing Page

A personal brand hub built with React and Vite. Features a bold, creative design with a colour palette derived from the profile picture, light/dark mode toggle, and markdown-driven content.

## Running Locally

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Docker

The container runs nginx as a non-root user and listens on **8080** (unprivileged users cannot bind ports below 1024).

```bash
docker build -t dougie-landing-page .
docker run -p 8080:8080 dougie-landing-page
```

Open http://localhost:8080

To build for a custom port, pass the `PORT` build argument (must be ≥ 1024):

```bash
docker build --build-arg PORT=3000 -t dougie-landing-page .
docker run -p 3000:3000 dougie-landing-page
```

## Editing Content

All text is driven by markdown files in `src/content/`, bundled at build time:

| File | Section |
|------|---------|
| `src/content/intro.md` | Hero introduction text |
| `src/content/skills.md` | Skills & technologies badges |

Edit these files and rebuild (or just save during `npm run dev`) to update the site.

## Project Structure

```
src/
├── components/     # React components with co-located CSS
├── content/        # Markdown content files (bundled at build)
├── hooks/          # useTheme, useInView
├── App.jsx         # Root component
└── index.css       # Theme system, fonts & global styles
public/
├── fonts/          # Self-hosted woff2 fonts
└── ProfilePicture.png
```

## License

[AGPL-3.0](https://www.gnu.org/licenses/agpl-3.0.en.html)
