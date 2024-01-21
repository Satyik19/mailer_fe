import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'static', // Set the build output directory to "static"
    assetsDir: '',   // Set assetsDir to an empty string to avoid subdirectory in the outDir
  },
  base: '/static/',
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      },
    },
  },
})
