/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto","sans-serif"],
      },
      colors: {
        'm-black': '#161313',
        'orange-m': '#E34D00',
        'b-gradient': '#1E1C1C',
        'content-color': '#BCBCBC',
        'price-color': '#805Af5',
      },
      keyframes: {
        'infinit-animate':{
          '0%':{transform: 'translateX(-.2%)'},
          '25%': {transform: 'translateX(-.2%)'},
          '45%': {transform: 'translateX(-50%)'},
          '65%': {transform: 'translateX(-50%)'},
          '85%': {transform: 'translateX(-100%)'},
          '100%':{transform: 'translateX(-100%)'},
        },
      },
      animation: {
        'infinit-animate': 'infinit-animate 10s linear infinite'
      },
    },
  },
  plugins: [],
}