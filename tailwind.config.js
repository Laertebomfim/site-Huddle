/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"
],
  darkMode: 'class',
  
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      "Poppins":"'Poppins' sans-serif"
    },
    extend:{
    colors: {
        'fundo': '#f6fcff',
        'fundo2': '#01262e'
      }
    },
  },
  plugins: [],
}
