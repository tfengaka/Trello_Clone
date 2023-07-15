import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    cors: true,
    host: '0.0.0.0',
    hmr: {
      path: '/hmr',
    },
  },
  css: {
    devSourcemap: true,
  },
  resolve: {
    alias: [{ find: '~', replacement: '/src' }],
  },
});
