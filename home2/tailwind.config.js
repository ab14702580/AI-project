/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'black-100': '#161313',
        'blue-10': '#805AF5',
        'black-m': '#1D1C1C',
        'color-b': '#88868680',
        'black-m2': '#222',
        'content': '#BBBABA',
      },
      animation: {
        'text_animate1':'text_animate1 .5s linear 1',
        'text_animate2': 'text_animate2 .5s linear 1'
      },
      keyframes: {
        text_animate1: {
          '0%': {transform: 'translateY(40px)',opacity: '0'},
          '100%':{transform: 'translateY(0)',opacity: '1'}
        },
        text_animate2: {
          '0%': {transform: 'translateY(-40px)',opacity:'0'},
          '100%': {transform: 'translateY(0)',opacity: '1'}
        },
      },
    },
  },
  plugins: [],
}

