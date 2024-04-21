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
        main: "#153448"
      },
      fontSize: {
        headingMain: "1.625rem"
      },
      boxShadow: {
        header: "inset 0 -1px 0 0 #eaeaea"
      }
    },
  },
  plugins: [],
}

