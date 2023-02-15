/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  presets: [require("./src/styles/tailwind/tw-preset-theme")],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [],
};
