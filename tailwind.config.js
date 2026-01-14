/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        light: {
          background: '#ffffff',   // blanco
          text: '#b45309',         // cobre (Tailwind amber-700)
          accent: '#d97706',       // amarillo/cobre más vivo
        },
        dark: {
          background: '#0e0e0e',
          text: '#f0f0f0',
          accent: '#00ffff',
        },
      },
    },
  },
  plugins: [],
}