const colors = require("tailwindcss/colors");
module.exports = {
  purge: {
    enabled: process.env.TAILWIND_MODE === "build",
    content: [
      "./projects/ngx-humanize-duration-showcase/src/**/*.{html,scss,ts}",
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "blue-gray": { ...colors.blueGray, 500: "#607d8b", 600: "#546e7a" },
        cyan: {
          ...colors.cyan,
          100: "#b2ebf2",
          300: "#4dd0e1",
          400: "#26c6da",
          500: "#84ffff",
          600: "#00acc1",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
