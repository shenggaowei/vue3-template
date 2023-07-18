/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        themeColor: "rgba(46, 64, 80, 1)",
        textColor: "#277DBE",
      },
    },
  },
  plugins: [],
};
