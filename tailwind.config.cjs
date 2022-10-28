/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
    "./main.js"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    container: {
      screens: {
        default: '1440px',
        sm: '300px',
        md: '480px',
        lg: '768px',
        xl: '976px'
      }
    },
    extend: {
      colors: {
        whiteish: '#FFEDDF',
        yellowish: '#F5E960',
        grey: '#f4f4f4',
        darkish: '#0D1321',
        blueish: '#0257a2',
        orangeish: '#d33405'
      },
    },
  },
  plugins: [],
}
