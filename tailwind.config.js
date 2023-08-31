/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,jsx}"],
  theme: {
    extend: {

      backgroundImage: {
        'pet-bg': 'url(../assets/Fondo.jpg)'
      }
    },
  },
  plugins: [],
}

