const plugin = require('tailwindcss/plugin')

const colors = require('./tailwind-parts/colors');
const fontSize = require('./tailwind-parts/typography');
const customUtilities = require('./utilities/custom-utilities');


module.exports = {
  content: [
    "./*.html",
    "./src/**/*.{html,js,css,ts,jsx,tsx}",
    "../wp-theme/**/*.php",
    "../wp-theme/**/*.html",
  ],
  safelist: [
    { pattern: /^p-(0|1|2|4|8|12)$/ },
    { pattern: /^m-(0|1|2|4|8|12)$/ },
    { pattern: /^gap-(0|1|2|4|8|12)$/ },
    { pattern: /^(grid|flex|inline-grid)$/ },
  ],
  theme: {
    extend: {
      colors,
      fontFamily: {
        sans: ["'Suisse Int\\'l'", 'sans-serif'],
        serif: ["'Suisse Works'", 'serif'],
        mono: ['Courier New', 'monospace']
      },
      fontSize,
    },
  },
  plugins: [
    plugin(({ addUtilities }) => customUtilities(addUtilities)),
  ]
}