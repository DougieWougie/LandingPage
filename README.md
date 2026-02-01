# Dougie Richardson — Personal Landing Page

A personal brand hub built with React and Vite. Features a bold, creative design with a colour palette derived from the profile picture, light/dark mode toggle, and markdown-driven content.

## Running Locally

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Docker

```bash
docker build -t dougie-landing-page .
docker run -p 8080:80 dougie-landing-page
```

Open http://localhost:8080

To build for a custom port, pass the `PORT` build argument:

```bash
docker build --build-arg PORT=3000 -t dougie-landing-page .
docker run -p 3000:3000 dougie-landing-page
```

## Editing Content

All text is driven by markdown files in `public/content/`:

| File | Section |
|------|---------|
| `public/content/intro.md` | Hero introduction text |
| `public/content/skills.md` | Skills & technologies badges |

Edit these files and rebuild (or just save during `npm run dev`) to update the site.

## Project Structure

```
src/
├── components/     # React components with co-located CSS
├── hooks/          # useTheme, useMarkdown, useInView
├── App.jsx         # Root component
└── index.css       # Theme system & global styles
public/
├── content/        # Markdown content files
└── ProfilePicture.png
```

## License

[AGPL-3.0](https://www.gnu.org/licenses/agpl-3.0.en.html)
