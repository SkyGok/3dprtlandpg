/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        warm: {
          50: '#fef9f0',
          100: '#fef3e1',
          200: '#fce5c2',
          300: '#f9d08a',
          400: '#f5b84a',
          500: '#f2a02e',
          600: '#e3821a',
          700: '#bc6417',
          800: '#96501a',
          900: '#794318',
        },
      },
    },
  },
  plugins: [],
}

