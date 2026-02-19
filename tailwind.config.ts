// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brandYellow: '#ffc000',
        brandLightYellow: '#ffda6a',
        brandDark: '#262729',
      },
      fontFamily: {
        luxe: ['Luxe Uno', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}