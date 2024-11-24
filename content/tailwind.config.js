/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'black-10': '#161313',
        'modify-color': '#805AF5',
        'black-200': '#1D1C1C',
        'content': '#D1D1D1',
      },
    },
  },
  plugins: [],
}
