import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      includeAssets: ['favicon.ico', 'robots.txt'],
      manifest: {
        name: 'Fibonaccy',
        short_name: 'Fibonaccy',
        start_url: '/',
        display: 'standalone',
        theme_color: '#3E66FB',
        background_color: '#fff',
        icons: [
          {
            src: '/img/logoPWA.png',
            sizes: '144x144',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src'),
      },
    ],
  },
})
