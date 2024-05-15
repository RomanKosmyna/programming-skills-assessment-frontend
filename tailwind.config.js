/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        mainWhite: "#FFF",
        mainDark: "#0a0a0a",
        darkButtonBorder: "#5f5f5f",
        darkBorder: "#373737",
        darkAccent1: "#1b1b1b",
        darkText1: "#adacac",
        darkHeading: "#efefef",
        lightMainLayout: "bg-gradient-to-br from-white to-gray-100",
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
        dark: "inset 0 -1px hsla(0,0%,100%,.14)",
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