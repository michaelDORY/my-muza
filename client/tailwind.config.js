/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FA4A3C",
        secondary: {
          dark: "#A0C3D2",
          light: "#A0C3D2",
        },
      },
      backgroundColor: {
        dark: "#040015",
        light: "#D2EAF1",
      },
      boxShadowColor: {
        dark: "#120b33",
        light: "#284957",
      },
      keyframes: {
        move: {
          "0%, 100%": { backgroundPosition: "0 0" },
          "50%": { backgroundPosition: "400% 0" },
        },
      },
    },
  },
  plugins: [],
};
