const plugin = require('tailwindcss/plugin')

// const colors = require('./tailwind-parts/colors.js');
// const fontSize = require('./tailwind-parts/typography');
const customTypography = require('./utilities/custom-typography');


module.exports = {
  content: [
    "./index.html",
    "./src/**/**/*.{html,js,jsx,ts,tsx,css}",
  ],
  safelist: [
    { pattern: /^(p|px|py|pt|pr|pb|pl)-(0(\.5)?|1(\.5)?|2(\.5)?|3(\.5)?|4|5|6|7|8|9|10|11|12|14|16|20|24|28|32|36|40|44|48|52|56|60|64|72|80|96|px)$/ },
    { pattern: /^(m|mx|my|mt|mr|mb|ml)-(0(\.5)?|1(\.5)?|2(\.5)?|3(\.5)?|4|5|6|7|8|9|10|11|12|14|16|20|24|28|32|36|40|44|48|52|56|60|64|72|80|96|px)$/ },
    { pattern: /^gap-(0|1|2|4|8|12)$/ },
    { pattern: /^(grid|flex|inline-grid)$/ },
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Suisse Int\\'l'", 'sans-serif'],
        serif: ["'Suisse Works'", 'serif'],
        mono: ['Courier New', 'monospace']
      },
      borderRadius: {
        lg: `0.5rem`,
        md: `calc(0.5rem - 2px)`,
        sm: "calc(0.5rem - 4px)",
      },
      screens: {
        'md': '768px',
        'lg': '1440px',
        'xl': '2560px',
      },
      fontWeight: {
        'thin': '300',
        normal: '400',
        'book': '450',
        medium: '500',
        semibold: '600',
        bold: '700',
        'black': '800',
      }
    },
  },
  plugins: [
    plugin(customTypography)
  ],
}