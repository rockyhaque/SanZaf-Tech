/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    colors: {
      customGreen: '#00CC71', 
      customBlack: '#101211', 
      customGray: '#4D4D4D',
      customLightGray: '#F2F2F2',
      customGreenGray: '#EDF2EE',
      customCreamyGreen: '#00B2071A',
      customWhite: '#FFFFFF',
      customTurquoise : '#40E0D0 ',
      customPurple : '#F1EFFF',
      customRed : '#F53E4D',
      customOrange : '#FF8A00',
      customSoftPink: '#FFDEE9',
      customSoftSky: '#B5FFFC',
      customBlue: '#002D62',
      
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}

