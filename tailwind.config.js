// tailwind.config.js

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#953cbd",
        secondary: "#ddb5f2",
      },
      backgroundClip: {
        text: ["text"],
      },
    },
  },
  plugins: [],
};
