/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./components/src/lib/**/*.{html,ts}",
    "./src/**/*.{html,ts}",
    "./src/index.html",
  ],
  theme: {
    fontFamily: {
      serif: "'Heliotrope 3'",
      heading: "'Heliotrope 4'",
    },
  },
  darkMode: "class",
  plugins: [],
};
