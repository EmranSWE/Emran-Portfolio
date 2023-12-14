/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: ["dark", "cmyk", "night"],
  },
  plugins: [require("daisyui")],
};
