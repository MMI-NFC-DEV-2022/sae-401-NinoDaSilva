/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
      colors: {
       "noir": "#0e0e0e",
       "blanc": "#ffffff",
       "orange": "#f5c754",
      },
      fontSize: {
       "sm": "0.8125rem", // 13px
       "base": "1rem", // 16px
       "lg": "1.25rem", // 20px
       "xl": "1.5rem", // 24px
       "2xl": "1.5625rem", // 25px
       "3xl": "1.875rem", // 30px
      },
      fontFamily: {
       spline: ["Spline Sans", "sans-serif"],
      },
    extend: {},
  },
  plugins: [],
}

