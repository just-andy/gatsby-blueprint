const { NONAME } = require('dns');
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      display: ['Helvetica,"Helvetica Neue",Arial,"Lucida Grande",sans-serif'],
      body: ['Helvetica,"Helvetica Neue",Arial,"Lucida Grande",sans-serif'],
    },
    colors: {
      primary: colors.sky,
      secondary: colors.violet,
      gray: colors.stone,
      white: colors.white,
      positive: colors.emerald,
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
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
