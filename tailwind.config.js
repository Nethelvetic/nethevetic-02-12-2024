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
        'title-1': '85px',
        'title-2': '65px',
        'title-3': '46px',
        'title-4': '34px',
        'title-5': '26px',
        'title-6': '20px',
        'title-7': '14px',
        'title-8': '12px'
      },
      backgroundImage: {
        'bg-gradient': 'linear-gradient(to right, #EB5E57, #4445D2)',
        'bg-gradient2': 'linear-gradient(to right, #000E59, #AF8FF7)',
      },

    },
  },
  plugins: [],
};
