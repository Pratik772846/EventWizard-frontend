/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'header': ['Athiti']
    },
    extend: {
      colors:{
        'color1':'#9568E1',
        'color2':'#5AA4C9',
        'color3':'#E893CF',
        'color4':'#F6FFA6',
        'color5':'#E4A5FF',
        'color6':'#E5B8F4'
      },
    },
  },
  plugins: [],
}