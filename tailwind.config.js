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
        accent1: "#fafafa",
        accentBlue: "#7AA2E3",
        accentGray1: "#666",
        hoverAccentBlue: "#6A92D3",
        lightBlue: "#0070f3",
        darkerLightBlue: "#005cdf",
      },
      fontSize: {
        headingMain: "1.625rem"
      },
      boxShadow: {
        light: "inset 0 -1px 0 0 #eaeaea",
        borderLight: "inset 0 0 0 1px #eaeaea",
        instructionCards: "inset 0 0 10px 1px #eaeaea",
        authForm: "0 0 10px rgb(0 0 0 / 0.1)"
      },
      screens: {
        "tablet": "650px",
        "laptop": "800px",
        "desktop": "1150px"
      }
    },
  },
  plugins: [],
}