/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        typewriter: {
          "25%": { width: "0%" },
          "50%": { width: "100%" },
          "75%": { width: "0" },
          "100%": { width: "100%" },
        },
      },
      animation: {
        typewriter: "typewriter 7.5s steps(44) ",
      },
    },
  },
  variants: {},
  plugins: [],
};
