/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      fontSize: {
        '10xl': '10rem',
      },
      lineHeight: {
        xl: '7rem',
        '2xl': '11rem',
      },
    },
  },
  plugins: [],
};
