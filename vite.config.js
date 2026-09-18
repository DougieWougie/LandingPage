import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { execSync } from 'child_process'
import { readFile } from 'fs/promises'
import { marked } from 'marked'

let siteVersion
try {
  siteVersion = execSync('git describe --tags --always').toString().trim()
} catch {
  siteVersion = process.env.SITE_VERSION || 'unknown'
}

// Renders src/content/*.md to an HTML string at build time so the markdown
// parser never ships to the browser. `import html from './file.md'`.
function markdownPlugin() {
  return {
    name: 'markdown-to-html',
    async load(id) {
      if (!id.endsWith('.md')) return null
      const src = await readFile(id, 'utf8')
      const html = await marked.parse(src, { gfm: true })
      return `export default ${JSON.stringify(html)}`
    },
  }
}

export default defineConfig({
  plugins: [react(), markdownPlugin()],
  define: {
    __SITE_VERSION__: JSON.stringify(siteVersion),
  },
})
