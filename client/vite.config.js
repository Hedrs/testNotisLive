import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import vike from 'vike/plugin';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vite.dev/config
export default defineConfig({
  optimizeDeps: {
    include: ['react', 'react-dom'], // Предварительная оптимизация зависимостей
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react')) {
              return 'react';
            }
            return 'vendor';
          }
          if (id.includes('vike') || id.includes('vite-plugin')) {
            return 'framework';
          }
        },
      },
    },
  },
  plugins: [react(), vike({ prerender: true }), visualizer({ open: true, gzipSize: true, brotliSize: true })],
});
