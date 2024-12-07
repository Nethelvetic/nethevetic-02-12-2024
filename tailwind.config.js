/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bebas: ['Bebas Neue', 'cursive'],
        roboto: ['Roboto', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        openSansRegular: ['Open Sans', 'sans-serif'],
        openSansBold: ['Open Sans Bold', 'sans-serif'],
      },
      fontSize: {
        'title-1': '65px',
        'title-2': '46px',
        'title-3': '34px',
        'title-4': '28px',
        'title-5': '14px',
        'title-6': '85px',
      },
      backgroundImage: {
        'bg-gradient': 'linear-gradient(to right, #EB5E57, #4445D2)',
      },
      colors: {
        'special-border': 'linear-gradient(to right, #EB5E57, #4445D2)', // Ajoute ici une couleur de ton choix pour la bordure
      },
    },
  },
  plugins: [],
};
