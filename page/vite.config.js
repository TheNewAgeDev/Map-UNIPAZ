import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createHtmlPlugin } from 'vite-plugin-html'

import { resolve as resolvePath } from 'path'

export default defineConfig({
  publicDir: './public',
  assetsInclude: ['public'],
  plugins: [
    react(), createHtmlPlugin({
      minify: true
    })
  ],
  resolve: {
    alias: {
      '@': resolvePath(__dirname, './src'),
      '#': resolvePath(__dirname, './')
    }
  }
})
