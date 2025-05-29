import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Try relative base for debugging
  build: {
    outDir: 'dist',
    sourcemap: true
  }
})
