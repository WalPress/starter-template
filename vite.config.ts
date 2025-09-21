import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    headers:{
      // CSP disabled for development - iframe loading
      // 'Cross-Origin-Embedder-Policy': 'require-corp',
      // 'Content-Security-Policy': "frame-ancestors *; frame-src *",
      // 'Cross-Origin-Opener-Policy': '*',
      'Access-Control-Allow-Origin': '*'
    }
  }
})
