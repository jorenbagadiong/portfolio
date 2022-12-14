/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      xs: "540px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    colors: {
      purple: "#6721FF",
      skyblue: "#00C1FF",
      gray: "#4F4F4F",
      black: "#000",
      white: "#fff",
      transparent: "transparent",
    },
  },
  plugins: [],
}
