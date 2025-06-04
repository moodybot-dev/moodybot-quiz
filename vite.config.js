import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  base: '/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    outDir: 'dist/public',
    emptyOutDir: true,
  },
  preview: {
    port: process.env.PORT || 4173,
    host: true,
    allowedHosts: ['moodybot-quiz.onrender.com'],
  },
})
