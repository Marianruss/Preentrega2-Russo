/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily:{
      'card' : ['Franklin Gothic Medium', 'Arial Narrow']
    },
    extend: {
      width:{
      '250': '250px',
      '350': '350px',
      '450': '450px',
      '300': '300px',
      '500': '500px'},
      height: {
        '250': '250px',
      '350': '350px',
      '450': '450px',
      '300': '300px',
      '500': '500px'
      }

    },
  },
  plugins: [],
}