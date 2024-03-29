/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: ['"Source Sans Pro"', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: '#5f50e6',
        error: '#f53b57',
      },
    },
  },
  plugins: [],
};
