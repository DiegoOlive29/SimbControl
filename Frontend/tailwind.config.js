/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jura: ["Jura", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        michroma: ["Michroma", "sans-serif"],
      },
      colors: {
        red: {
          dark: "#A30D11",
          medium: "#D92D20",
          light: "#FEE4E2",
          soft: "#FEF3F2",
        },
        green: {
          dark: "#1F9254",
          light: "#D1FADF",
          soft: "#ECFDF3",
        },
        blue: {
          dark: "#1F3E60",
          medium: "#24547E",
          bright: "#09AFF4",
          deep: "#2D4F78",
          light: "#EBF9F1",
        },
        gray: {
          darkest: "#1E1E1E",
          dark: "#414651",
          medium: "#717680",
          neutral: "#9E9E9E",
          light: "#D5D7DA",
          soft: "#E0E0E0",
          pale: "#E9EAEB",
          background: "#F5F5F5",
          lightest: "#FDFDFD",
          steel: "#535862",
        },
        orange: {
          dark: "#CD6200",
          light: "#FEF2E5",
        },
        purple: {
          medium: "#7F56D9",
        },
        black: {
          default: "#000000",
          soft: "#181D27",
          dark: "#112749",
        },
        neutral: {
          dark: "#8B8C95",
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
