import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  // 1. Force a single instance of React to prevent "Invalid Hook Call" errors
  resolve: {
    dedupe: ['react', 'react-dom'],
  },
})