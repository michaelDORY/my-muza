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
        accent: {
          dark: '#040015',
          light: '#ccccd9'
        },
        formColor: {
          dark: 'rgba(4,0,21,0.35)',
          light: 'rgba(204,204,217,0.35)'
        }
      },
      backgroundColor: {
        dark: "#040015",
        light: "#A0C3D2",
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
