import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { execSync } from 'child_process'

const siteVersion = execSync('git describe --tags --always').toString().trim()

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.md'],
  define: {
    __SITE_VERSION__: JSON.stringify(siteVersion),
  },
})
