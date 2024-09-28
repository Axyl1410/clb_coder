/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: "#F8F8F8",
      },
      screens: {
        rp: "900px",
        xs: "480px",
        mm: "375px",
      },
    },
  },
  plugins: [],
};
