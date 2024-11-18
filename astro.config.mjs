import { defineConfig } from 'astro/config';

export default defineConfig({
  // Enable static site generation
  output: 'static',
  
  // Enable build optimizations
  build: {
    // Minimize CSS/JS
    inlineStylesheets: 'auto',
    // Split vendor chunks
    splitVendorChunkNames: true
  },

  // Image optimization
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  },

  // Improve dev experience
  vite: {
    build: {
      // Reduce chunk size
      chunkSizeWarningLimit: 1000,
      rollupOptions: {
        output: {
          manualChunks: {
            'vendor': ['astro']
          }
        }
      }
    },
    // Enable CSS code splitting
    css: {
      modules: {
        generateScopedName: '[hash:base64:5]'
      }
    }
  }
});