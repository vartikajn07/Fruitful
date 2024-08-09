/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "475px",
        sm: "640px",
        md: "880px",
        lg: "1024px",
        xl: "1280px",
      },
      colors: {
        "dark-green": "#054F31",
        "light-green": "#D9FFE0",
        skin: "#FEE9D1",
        blueish: "#EFF7FF",
        backdrop: "rgba(255,255,255,.50)",
      },
    },
  },
  plugins: [],
};
