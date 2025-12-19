import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Base path for GitHub Pages (use your repository name)
  // For root domain, set to '/'
  // For subdirectory, set to '/repository-name/'
  // HashRouter doesn't require base path, but it's good to set it for assets
  base: process.env.NODE_ENV === 'production' 
    ? (process.env.VITE_BASE_PATH || '/3dprtlandpg/')
    : '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})

