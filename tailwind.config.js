/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'googleRed': "#EA4235",
      'googleBlue': "#4286F5",
      'googleGreen': "#109D58",
      'googleYellow': "#FABD03",
      'textMain': "#1E1E1E",
      'textSecondary': "#91969F",
    },
    fontFamily: {
      'google': ['Open Sans','sans-serif'],
    },
    screens: {
      'small':{
        'max':'800px'
      },
      'large':{
        'min':'800px'
      }
    },
  },
  plugins: [],
}
