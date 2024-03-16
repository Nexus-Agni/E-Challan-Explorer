/** @type {import('tailwindcss').Config} */
export const content = ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"];
export const theme = {
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
      typewriter: "typewriter 9.5s steps(44) ",
    },
    backdropFilter: {
      'none': 'none',
      'blur': 'blur(20px)',
    },
    backgroundColor: {
      'black-25': 'rgba(0, 0, 0, 0.5)',
    }
  },
};
export const variants = {};
export const plugins = [];

