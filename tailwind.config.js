/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    backgroundImage: {
      backgroundWaves: "url('/src/assets/Waves.png')",
    },
    colors: {
      transparent: "transparent",
      white: "#ffffff",
      stone: "#f5f5f4",
      cyan: "#06b6d4",
      gray: "#2A2C2E",
    },
    extend: {
      backgroundImage: {
        "homepage-bg": "url('/src/assets/homepage.png')",
        "aboutpage-bg": "url('/src/assets/Waves.svg')",
      },
      fontFamily: {
        primary: ["Abhaya Libres", "sans-serif"],
      },
    },
  },
  plugins: [],
};
