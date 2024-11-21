/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#000",
      purple: "#3f3cbb",
      midnight: "#121063",
      metal: "#565584",
      lemon: "#00712D",
      orange: "#FF9A00",
      gray: "#B7B7B7",
      tahiti: {
        100: "#cffafe",
        200: "#a5f3fc",
        300: "#67e8f9",
        400: "#22d3ee",
        500: "#06b6d4",
        600: "#0891b2",
        700: "#0e7490",
        800: "#155e75",
        900: "#164e63",
      },
      silver: "#ecebff",
      "bubble-gum": "#ff77e9",
      bermuda: "#78dcca",
    },
    extend: {
      keyframes: {
        typing: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        blink: {
          "50%": { "border-color": "transparent" },
        },
      },
      animation: {
        typing: "typing 3s steps(30, end) forwards",
        blink: "blink 0.75s step-end infinite",
      },
    },
  },
  plugins: [],
};
