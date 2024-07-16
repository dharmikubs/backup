/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      // xl: "1399px",
    },
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        custom: "0px 4px 34px 0px rgba(110, 110, 110, 0.09)",
        header: "0px 4px 4px 0px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [],
};
