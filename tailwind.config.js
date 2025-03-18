/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: '#0d1117',
      },
      fontFamily: {
        petitFormal: ['Petit Formal Script'],
        inter: ['Inter'],
        russoOne: ['Russo One'],
      },
      backgroundImage:{
        wrapperBg:"url('assets/images/back.jpg')"
      },
      container:{
        sm:"640px",
        md:"767px",
        lg:"1140px",
        xl:"1440px",
        "2xl": "1800px"
      }
    },
  },
  plugins: [],
}
