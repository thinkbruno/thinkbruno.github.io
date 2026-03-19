import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  base: '/thinkbruno.github.io/', // <- ESSENCIAL para GitHub Pages
  plugins: [vue()],
  root: resolve(__dirname),
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: resolve(__dirname, 'index.html'),
    },
  },
})