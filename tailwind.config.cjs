/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      display: ['Poppins', 'sans-serif'],
    },
    extend: {
      backgroundImage: { 'background': "url('/src/assets/images/RoadTaxi.png')" }
    },
  },
  plugins: [],
}
