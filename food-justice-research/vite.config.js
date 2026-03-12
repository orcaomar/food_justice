import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { imagetools } from 'vite-imagetools'
import Sitemap from 'vite-plugin-sitemap'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    imagetools(),
    Sitemap({
      hostname: 'https://foodjusticeresearch.ca/',
      dynamicRoutes: [
        '/',
        '/research',
        '/challenges',
        '/challenges/increasing-and-deepening-food-insecurity',
        '/challenges/unaffordability',
        '/challenges/labour-market-exploitation',
        '/challenges/stigmatization',
        '/challenges/emergency-food-charity',
        '/challenges/poverty-corporate-greed',
        '/challenges/competition-power-imbalance',
        '/community-ideas',
        '/get-involved'
      ]
    })
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.js',
  },
})
