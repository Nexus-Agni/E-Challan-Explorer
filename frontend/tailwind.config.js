/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        typewriter: {
          '0%': { width: '0' },
          '100%': { width: '100%' }
        },
        blink: {
          '50%': { 'border-color': 'transparent' }
        }
      },
      animation: {
        typewriter: 'typewriter 3.5s steps(40, end)',
        blink: 'blink .75s step-end infinite'
      }
    },
  },
  plugins: [],
}