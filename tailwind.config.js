/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        cartheme: {
"primary": "#61b3de",
"secondary": "#D926A9",
"accent": "#1FB2A6",
"neutral": "#191D24",
"base-100": "#2A303C",
"info": "#3ABFF8",
"success": "#36D399",
"warning": "#FBBD23",
"error": "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}