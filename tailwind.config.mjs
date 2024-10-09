/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./main.js",
    "./customcode.js",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6D50B8', // Puedes usar `DEFAULT` para el color principal
        },
        secondary: {
          DEFAULT: '#E64871',
        },
        accent: {
          DEFAULT: '#C2E462', // Cambiado a valor completo
        },
        accentHover: {
          DEFAULT: '#A3C56C',
        },
        softpink: {
          DEFAULT: '#F9D2DF', // Cambiado a valor completo
        },
      },
    },
  },
  plugins: [],
};
  