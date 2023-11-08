/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      "dark", // this should be your first theme if you want it as the default
      "light",
      // ...other themes
    ],
  },
  plugins: [require("daisyui")],
};
