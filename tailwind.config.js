/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  darkMode: 'class', // Asegúrate de tener esto
  theme: {
    extend: {
      colors: {
        light: {
          background: '#f9fafb',
          text: '#111827',
          accent: '#2563eb',
        },
        dark: {
          background: '#121212',
          text: '#e0e0e0',
          accent: '#00ffff',
        },
      },
    },
  },
  plugins: [],
}
