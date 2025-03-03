/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': '#1e3a8a', // Dark blue from the header
        'secondary': '#c7d5f8', // Light blue from the body
        'accent': '#3454d1', // Medium blue from buttons
        'custom-bg': '#EFF0FD' // New light purple background color
      },
      fontFamily: {
        'sans': ['Arial', 'sans-serif']
      }
    },
  },
  plugins: [],
}