/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: "#427D9D",
        main: "#FFF",
        accent1: "#fafafa"
      },
      fontSize: {
        headingMain: "1.625rem"
      },
      boxShadow: {
        light: "inset 0 -1px 0 0 #eaeaea",
        borderLight: "inset 0 0 0 1px #eaeaea"
      }
    },
  },
  plugins: [],
}