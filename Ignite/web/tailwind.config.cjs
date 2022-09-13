/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily:{
        sans: ["Inter", "sans-serif"]
      },
      backgroundImage: {
        galaxy: "url('/fundo.png')",
        'nlw-gradient': 'linear-gradient(90deg, #9572FC 0%, #43E7AD 50.00%, #E1D55D 100%)',
        'game-gradient': 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0, 0.9) 67.08%)',
      },
      colors:{
        
        gray:{
          800: "#2A2634",
          900: "#121414",
        },
      },
    },
  },
  plugins: [],
}
