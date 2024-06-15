/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#282A36",
        secondary: "#333644",
        wrapper: "#434656",
        bluebtn: "#458EED",
      },
    },
    plugins: [
      plugin(function ({ addUtilities }) {
        addUtilities({
          ".drag-none": {
            "-webkit-user-drag": "none",
            "-khtml-user-drag": "none",
            "-moz-user-drag": "none",
            "-o-user-drag": "none",
            "user-drag": "none",
          },
        });
      }),
    ],
  },
};
