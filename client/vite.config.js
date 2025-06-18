import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import vike from 'vike/plugin';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vite.dev/config
export default defineConfig({
  base: '/testNotisLive/',
  optimizeDeps: {
    include: ['react', 'react-dom'], // Предварительная оптимизация зависимостей
  },
  build: {
    chunkSizeWarningLimit: 2000,
  },
  plugins: [react(), vike(), visualizer({ open: true, gzipSize: true, brotliSize: true })],
});
