/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mont: ['var(--font-mont)', ...fontFamily.sans],
      },
      colors: {
        dark: '#1b1b1b',
        light: '#f5f5f5',
        primary: '#B63E96',
        primaryDark: '#58E6D9',
        gray: '#d0d7de',
        darkGray: '#656d76',
        link: '#0969da',
      },
      keyframes: {
        blob: {
          '0%': {
            transform: 'translate(-50%, -50%) scale(1)',
          },
          '33%': {
            transform: 'translate(-41%, -65%) scale(1.2)',
          },
          '66%': {
            transform: 'translate(-56%, -44%) scale(0.8)',
          },
          '100%': {
            transform: 'translate(-50%, -50%) scale(1)',
          },
        },
      },
      animation: {
        blob: 'blob 7s infinite',
      },
    },
  },
  // eslint-disable-next-line global-require
  // plugins: [require('daisyui')],
};
