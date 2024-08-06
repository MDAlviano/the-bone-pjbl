/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        BebasNeue: ["Bebas"],
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}