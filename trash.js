// "build": "vite build",

 "build": "tailwindcss -i ./src/input.css -o ./dist/output.css --watch"


 vite.config.js

 import { defineConfig } from 'vite';
 import { resolve } from 'path';
 
 export default defineConfig({
   base: './', // Asegura que todas las rutas generadas sean relativas
   build: {
     rollupOptions: {
       input: {
         main: resolve(__dirname, 'index.html'),
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
 });
