/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        mini: "1079px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        blue: {
          500: "#0062FF",
        },
      },
      backgroundImage: {
        "hero-pattern": "url('/images/header/Group 3094.png')",
      },
    },
  },
  plugins: [],
});
