/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        tomato: "#DE0000",
        banana: "#F6E05E",
        lime: "#00FF00",
        grape: "#6B46C1",
        blueberry: "#3182CE",
      },
    },
  },
  plugins: [],
};
