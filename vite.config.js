import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        apropos: resolve(__dirname, 'a-propos.html'),
        services: resolve(__dirname, 'services.html'),
        produits: resolve(__dirname, 'produits.html'),
        productions: resolve(__dirname, 'productions.html'),
        contact: resolve(__dirname, 'contact.html')
      }
    }
  }
});
