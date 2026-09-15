import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // A repository named `*.github.io` is served at the domain root. Keep the
  // project-site fallback for the current repository name until it is renamed.
  base: process.env.GITHUB_PAGES === 'true'
    ? (process.env.GITHUB_REPOSITORY?.split('/')[1]?.endsWith('.github.io')
      ? '/'
      : `/${process.env.GITHUB_REPOSITORY?.split('/')[1] || 'liquidboard-app'}/`)
    : '/',
  server: {
    // Allows temporary Cloudflare Quick Tunnel URLs during device testing.
    allowedHosts: ['.trycloudflare.com'],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
