/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      boxShadow: {
        tableshadow: "0px 4px 34px 0px rgba(110, 110, 110, 0.09)",
        popup: "0px 0px 44px 0px rgba(0, 0, 0, 0.1)",
      },
      height: {
        "screen-minus-header": "calc(100dvh - 74.8px)",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
