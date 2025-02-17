/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors:{},
      fontFamily: {
        pthin:["Poppins-Thin","sans-serif"],
        pextraLight:["Poppins-ExtraLight","sans-serif"],
        plight:["Poppins-Light","sans-serif"],
        pregular:["Poppins-Regular","sans-serif"],
        pmedium:["Poppins-Medium","sans-serif"],
        psemiBold:["Poppins-SemiBold","sans-serif"],
        pbold:["Poppins-Bold","sans-serif"],
        pextraBold:["Poppins-ExtraBold","sans-serif"],
        pblack:["Poppins-Black","sans-serif"]
      },
    },
  },
  plugins: [],
};
