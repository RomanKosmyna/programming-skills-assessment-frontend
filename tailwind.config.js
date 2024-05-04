/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#FFF",
        lightBlue: "#0070f3",
        darkerLightBlue: "#005cdf",
        accent1: "#fafafa"
      },
      fontSize: {
        headingMain: "1.625rem"
      },
      boxShadow: {
        light: "inset 0 -1px 0 0 #eaeaea",
        borderLight: "inset 0 0 0 1px #eaeaea",
        instructionCards: "inset 0 0 10px 1px #eaeaea",
        authForm: "0 0 10px rgb(0 0 0 / 0.1)"
      }
    },
  },
  plugins: [],
}