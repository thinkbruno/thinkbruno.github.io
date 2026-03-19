import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  root: resolve(__dirname), // raiz do projeto
  build: {
    outDir: 'dist',         // pasta de saída
    rollupOptions: {
      input: resolve(__dirname, 'index.html'), // ponto de entrada
    },
  },
})