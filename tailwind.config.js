/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        papel: "#FFFFFF",
        mesa: "#F1F1EE",
        tinta: "#1A1A1A",
        "tinta-2": "#4B4B48",
        linea: "#DEDCD6",
        naranja: "#EE6A1A",
        "naranja-oscuro": "#B4480A",
      },
      fontFamily: {
        display: ['"Rajdhani"', "sans-serif"],
        sans: ['"Barlow"', "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
