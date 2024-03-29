/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,}"],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        red: "DC4492",
        yellow: "FDCC49",
        grey: "ededed",
        "deep-blue": "010026",
        "dark-grey": "757575",
        "opaque-black": "rgba(0,0,0,0.35"
      },
      backgroundImage: (theme) => ({
        "gradient-rainbow":
        "linear-gradient(81.66deg, #00b5ee 7.21%, #ff45a4 45.05%, #ffba00 70.80%)",
        "gradient-rainblue":
        "linear-gradient(90deg, #24cbff 14.53%, #fc59ff 69.36%, #ffbd0c 117.73%)"
      }),
      fontFamily: {
        playfair:["Playfair Display", "serif"],
        opensans:["Open Sans", "sans-serif"]
        
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px"
    }
  },
  plugins: [],
}

