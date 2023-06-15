/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary': '#171717',
        'secondary': '#D0D0D0',
        'tertiary': '#101011',
        'quaternary': '#0EC6FE',
        'quinary': '#F5F5F5',

      }

    },
  },
  plugins: [],
}

