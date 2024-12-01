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
        'text_animate2': 'text_animate2 .5s linear 1',
        'infinite_animation': 'infinite_animation 4s ease infinite',
        'infinite_animation2': 'infinite_animation2 3.5s ease infinite',
        'infinite_circle-animation': 'infinite_circle_animation 4s ease infinite',
        'infinite_watterflow': 'infinite_watterflow 2s ease infinite',
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
        infinite_animation:{
          '0%':{transform:'translateY(-40px)'},
          '50%': {transform: 'translateY(0)'},
          '100%':{transform: 'translateY(-40px)'}
        },
        infinite_animation2:{
          '0%':{transform:'translateY(-40px)'},
          '50%': {transform: 'translateY(0)'},
          '100%':{transform: 'translateY(-40px)'}
        },
        infinite_circle_animation:{
          '0%':{transform: 'scale(1.3) translate(-5%,-10%)'},
          '50%':{transform: 'scale(1) translate(80px)'},
          '100%':{transform: 'scale(1.3) translate(-5%,-10%)'}
        },
        infinite_watterflow:{
          '0%':{transform: 'scale(1)', opacity: '1'},
          '100%':{transform: 'scale(1.3)', opacity: '0'}
        },
      },
    },
  },
  plugins: [],
}

