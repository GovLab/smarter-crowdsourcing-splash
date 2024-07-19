import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Unfonts from 'unplugin-fonts/vite'
import { VitePluginRadar } from "vite-plugin-radar";

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [
    react(),
    VitePluginRadar({
      // Google Analytics tag inject
      enableDev: true,
      analytics: {
        id: 'G-06WDGMW70J',
      },
    }),
    Unfonts({
      // Typekit API
      typekit: {
        /**
         * Typekit project id
         */
        id: 'mvc3cdb',
    
        /**
         * enable non-blocking renderer
         *   <link rel="preload" href="xxx" as="style" onload="this.rel='stylesheet'">
         * default: true
         */
        defer: true,
    
        /**
         * define where the font load tags should be inserted
         * default: 'head-prepend'
         *   values: 'head' | 'body' | 'head-prepend' | 'body-prepend'
         */
        injectTo: 'head-prepend',
      },
    })
  ],
  css: {
    devSourcemap: false,
  },
  
})
