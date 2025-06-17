import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import vike from 'vike/plugin';

// https://vite.dev/config
export default defineConfig({
  optimizeDeps: {
    include: ['react', 'react-dom'], // Предварительная оптимизация зависимостей
  },
  build: {
    minify: 'esbuild', // Используем esbuild для минимизации
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
          if (id.includes('/pages/')) {
            return 'pages';
          }
        },
      },
    },
  },
  plugins: [react(), vike({ prerender: true })],
});
