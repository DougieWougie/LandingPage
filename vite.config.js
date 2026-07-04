import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { execSync } from 'child_process'

let siteVersion
try {
  siteVersion = execSync('git describe --tags --always').toString().trim()
} catch {
  siteVersion = process.env.SITE_VERSION || 'unknown'
}

export default defineConfig({
  plugins: [react()],
  define: {
    __SITE_VERSION__: JSON.stringify(siteVersion),
  },
})
