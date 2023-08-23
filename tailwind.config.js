/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.jsx'],
  theme: {
    extend: {
      fontFamily: {
        suit: ['SUIT Variable'],
      },
      backgroundImage: {
        coverImg: 'url("/cover.jpg")',
      },
    },
  },
  plugins: [],
};
