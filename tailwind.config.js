/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#1E40AF',  /* Bleu foncé */
        secondary: "#1E40AF", /* Gris foncé */
        accent: "#4C1D95",  /* Violet foncé */
        background: "#F3F4F6", /* Gris très foncé */
        text: "#E5E7EB",  /* Texte clair */
      },
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
