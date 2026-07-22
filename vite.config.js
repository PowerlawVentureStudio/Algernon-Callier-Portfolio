import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Relative base so the static bundle works from any host path
// (GitHub Pages project subpath, S3 preview, Vercel, etc.).
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
});
