import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

export default defineConfig({
  plugins: [
    react(),
    nodePolyfills({
      // Whether to polyfill specific Node.js globals and modules
      // Includes 'os' by default
      include: ['os']
    })
  ],
  server: {
    proxy: {
      '/api': {
        target: 'https://urbancare-backend.onrender.com',
        changeOrigin: true
      }
    }
  }
})