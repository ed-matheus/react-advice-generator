import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // ou o diretório desejado para os arquivos de build
    terserOptions: {
      compress: {
        drop_console: true,
      },
    },
  },
});
