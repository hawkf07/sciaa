/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          100: "#FAFAFA",
          200: "#F5F5F5",
          300: "#E0E0E0",
          400: "#BDBDBD",
          500: "#9E9e9e",
          600: "#757575",
          700: "#616161",
          800: "#424242",
          900: "#212121",
        },
      },
    },
  },
  plugins: [],
};
