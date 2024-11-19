/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#FAD9E1',
          200: '#F08274',
          300: '#EF7B6E',
          400: '#DC405B',
        }
      }
    },
  },
  plugins: [],
}