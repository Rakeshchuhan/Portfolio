import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vuetify from 'vite-plugin-vuetify';
import path from 'path'; // Use ES module import for consistency

export default defineConfig({
  plugins: [
    vue(),
    vuetify({
      autoImport: true,
    }),
  ],
  define: { 'process.env': {} }, // Ensure compatibility with certain libraries
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    outDir: 'dist', // Output directory for production build
    rollupOptions: {
      output: {
        manualChunks: undefined, // Ensure proper chunking for SPAs
      },
    },
  },
  server: {
    port: 3000, // Local development port
  },
});