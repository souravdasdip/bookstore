import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA({
    manifest: {
      name: 'My React App',
      short_name: 'React App',
      theme_color: '#ffffff',
      display: 'standalone',
      icons: [
        {
          src: '/icons/react192x192.png',
          sizes: '192x192',
          type: 'image/png',
          purpose: "any maskable"
        },
        {
          src: '/icons/react512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: "any maskable"
        },
      ],
    },
    ios: {
      'apple-mobile-web-app-title': 'React App',
      'apple-mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-status-bar-style': 'black',
    },
    androidChrome: {
      'theme-color': '#ffffff',
      'manifest-override': {
        name: 'My React App',
        short_name: 'React App',
        start_url: '/',
        display: 'standalone',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        icons: [
          {
            src: '/icons/react192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/icons/react512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    },
  })],
})
