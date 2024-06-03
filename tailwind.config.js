/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "green-1": "#39DB4A",
        "red-1": "#FF6868",
        "secondary-1": "#555",
        "primaryBG": "#FCFCFC",
      },
    },
  },
  plugins: [require("daisyui")],
};
