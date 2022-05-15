import { defineConfig } from 'vite'
import { createHtmlPlugin } from 'vite-plugin-html'

import { resolve as resolvePath } from 'path'

export default defineConfig({
  publicDir: 'assets',
  plugins: [
    createHtmlPlugin({
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
