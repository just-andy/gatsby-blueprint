const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      display: ['Helvetica,"Helvetica Neue",Arial,"Lucida Grande",sans-serif'],
      body: ['Helvetica,"Helvetica Neue",Arial,"Lucida Grande",sans-serif'],
    },
    colors: {
      primary: colors.sky,
      secondary: colors.violet,
      gray: colors.coolGray,
      white: colors.white,
      positive: colors.green,
      negative: colors.red
    },
    container: {
      center: true,
      padding: '1rem',
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}