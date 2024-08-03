/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      lightYellow:"#f6d876",
      white2:"#fffbf2",
      darkGreen: "#05ab54",

      brown: {
        light: '#D2B48C', // light brown
        hello: '#f7d1c9', // default brown
        dark: '#5C4033' // dark brown
      },
      },
    fontFamily:{
      poppins: ["Poppins","sans-serif"],
      leagueGothic:["League Gothic", "sans-serif"]
    },
    container: {
      center: true,
      padding: {
        Default: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
  },
  
  plugins: [],
}

