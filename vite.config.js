import { defineConfig } from 'vite';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import { resolve } from 'path';

export default defineConfig({
  base: './', // Asegura que todas las rutas generadas sean relativas
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        registroExitoso: resolve(__dirname, 'registro-exitoso.html'), // Agrega la página de registro exitoso
      },
    },
    assetsDir: 'assets', // Carpeta para recursos como imágenes y CSS
    outDir: 'dist', // Carpeta de salida
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'), // Si tienes un alias para archivos fuente
    },
  },
  css: {
    postcss: {
      plugins: [
        tailwindcss(),
        autoprefixer(),
      ],
    },
  },
});
