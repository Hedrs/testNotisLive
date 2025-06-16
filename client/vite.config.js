import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import vike from 'vike/plugin';

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react(), vike({ prerender: true })],
});
