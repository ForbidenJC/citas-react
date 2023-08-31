/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,jsx}"],
  theme: {
    extend: {

      backgroundImage: {
        'pet-bg': 'url(https://pixabay.com/illustrations/dog-pawprint-tracks-background-pet-19812/)'
      }
    },
  },
  plugins: [],
}

