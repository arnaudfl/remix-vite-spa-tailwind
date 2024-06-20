import { vitePlugin as remix } from '@remix-run/dev'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import { resolve } from 'node:path'

export default defineConfig({
  plugins: [
    remix({
      ssr: false
    }),
    tsconfigPaths()
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'app'),
    },
  },
})
