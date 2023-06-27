import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA, VitePWAOptions } from 'vite-plugin-pwa'

const pwaOptions: Partial<VitePWAOptions> = {
    mode: 'development',
    base: '/',
    includeAssets: ['favicon.svg'],
    manifest: {
        name: 'Item Calculator',
        short_name: 'Item Calc',
        theme_color: '#ffffff',
        icons: [
            {
                src: 'pwa-192x192.png', // <== don't add slash, for testing
                sizes: '192x192',
                type: 'image/png',
            },
            {
                src: '/pwa-512x512.png', // <== don't remove slash, for testing
                sizes: '512x512',
                type: 'image/png',
            },
            {
                src: 'pwa-512x512.png', // <== don't add slash, for testing
                sizes: '512x512',
                type: 'image/png',
                purpose: 'any maskable',
            },
        ],
    },
    devOptions: {
        enabled: process.env.SW_DEV === 'true',
        /* when using generateSW the PWA plugin will switch to classic */
        type: 'module',
        navigateFallback: 'index.html',
    },
}

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), VitePWA(pwaOptions)],
})
