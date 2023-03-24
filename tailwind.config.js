/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'card': ['Franklin Gothic Medium', 'Arial Narrow']
    },
    extend: {
      width: {
        '5': '5px',
        '10': '10px',
        '25': '25px',
        '15': '15px',
        '20': '20px',
        '50': '50px',
        '200': '200px',
        '250': '250px',
        '350': '350px',
        '450': '450px',
        '400': '400px',
        '300': '300px',
        '500': '500px',
        '550': '550px',
        '600': '600px'
      },
      height: {
        '5': '5px',
        '10': '10px',
        '15': '15px',
        '20': '20px',
        '25': '25px',
        '50': '50px',
        '200': '200px',
        '250': '250px',
        '350': '350px',
        '450': '450px',
        '400': '400px',
        '300': '300px',
        '500': '500px',
        '550': '550px',
        '600': '600px'
      }

    },
  },
  plugins: [],
}