/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  presets: [
    require("./src/styles/configs/tw-preset-effects"),
    require("./src/styles/configs/tw-preset-base"), // Have to be at this last position
  ],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [],
}
