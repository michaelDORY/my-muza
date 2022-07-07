/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
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
      fontSize: {
        xs: ".75rem",
        sm: ".875rem",
        tiny: ".875rem",
        base: "1rem",
        lg: "1.5rem",
        xl: "2rem",
        "2xl": "3rem",
        "3xl": "4rem",
      },
    },
  },
  plugins: [],
};
