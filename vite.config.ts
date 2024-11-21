import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://southamerica-east1-pioneering-coda-440322-v4.cloudfunctions.net/teste', 
        changeOrigin: true, 
        rewrite: (path) => path.replace(/^\/api/, ''), 
        secure: true, 
        ws: false, 
      },
    },
  },
});

