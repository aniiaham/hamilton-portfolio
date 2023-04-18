/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    backgroundImage: {
      backgroundWaves: "url('/src/assets/Waves.png')",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      stone: "#f5f5f4",
      cyan: "#06b6d4",
      gray: "#C5C8C9",
      tahiti: "#3ab7bf",
      silver: "#ecebff",
      "bubble-gum": "#ff77e9",
      bermuda: "#78dcca",
    },
    extend: {
      backgroundImage: {
        "homepage-bg": "url('/src/assets/homepage.png')",
      },
      fontFamily: {
        primary: ["Abhaya Libres", "sans-serif"],
      },
    },
  },
  plugins: [],
};
