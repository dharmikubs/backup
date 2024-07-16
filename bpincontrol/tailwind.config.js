/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        Primary: "#F1AF1D",
        Black: "#010101",
        Secondary: "#5138A0",
        Grey: "#979797",
        LightCream: "#FDFBF7",
        White: "#FFFFFF",
      },
      boxShadow: {
        signin_shadow: "0px 4px 34px 0px #6E6E6E17",
      },
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
