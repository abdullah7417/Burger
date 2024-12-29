/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "selector",
  theme: {
    screens: {
      //   sm: "480px",
      //   md: "768px",
      //   lg: "1024",
      sm: "600px",
      md: "728px",
      lg: "984px",
    },
    extend: {
      colors: {
        "main-color": "#010a5e",
        "main-color-light": "#010d87",
        "secondry-color": "#ffcc00",
        "text-color": "#c0c0c0",
        "white-color": "#fff",
        "black-color": "#000",
        "green-color": "#007936",
        "red-color": "#cc3433",
        "dark-color": "#000",
        "dark-color-light": "#171717",
      },
      keyframes: {
        move: {
          "50%": { transform: "translateY(-1rem)" },
        },
      },
      animation: {
        movingImage: "move 2s linear infinite",
      },
      container: {
        center: true,
        padding: {
          default: "1rem",
          sm: "1.5rem",
        },
      },
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
        dmsans: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
