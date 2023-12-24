/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  content: ['./src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        mont: ['var(--font-mont)', ...fontFamily.sans],
      },
      colors: {
        dark: '#202f55',
        light: '#f5f5f5',
        primary: '#B63E96',
        primaryDark: '#58E6D9',
        gray: '#d0d7de',
        darkGray: '#656d76',
        link: '#0969da',
        // TODO: delete blow
        frangipani: '#FFDBBA',
        cornflowerLilac: '#FFACA8',
        pinkSalmon: '#FF8894',
        morningGlory: '#A1E0DD',
        fountainBlue: '#5CC2C6',
        poloBlue: '#88AED2',
        pepperMint: '#D4F1D8',
        amour: '#F7DFF6',
        persianPink: '#FA85B9',
        lilac: '#C387C2',
        anakiwa: '#A4E9FF',
        cornflowerBlue: '#5EA8E6',
        iron: '#D2D8D9',
        hitGray: '#ADB5BB',
        geyser: '#D0D7DE',
        millbrook: '#634538',
        coffeeBean: '#2D120F',
        tan: '#D1A68F',
        heather: '#bfc9d4',
      },
      keyframes: {
        updown: {
          to: {
            transform: 'translateY(20px)',
          },
        },
        blink: {
          '0%': {
            height: '0',
          },
          '30%': {
            height: '10px',
          },
          '100%': {
            height: '10px',
          },
        },
        nose: {
          '0%': {
            transform: 'translateY(40px)',
          },
          '20%': {
            transform: 'translate(7.5px, 35px)',
          },
          '30%': {
            transform: 'translate(7.5px, 35px)',
          },
          '60%': {
            transform: 'translate(-7.5px, 35px)',
          },
          '70%': {
            transform: 'translate(-7.5px, 35px)',
          },
          '90%': {
            transform: 'translateY(40px)',
          },
          '100%': {
            transform: 'translateY(40px)',
          },
        },
        shadow: {
          from: {
            width: '100px',
          },
          to: {
            width: '75px',
          },
        },
      },
      animation: {
        updown: 'updown 2s infinite alternate',
        blink: 'blink 1s infinite alternate',
        nose: 'nose 3s infinite',
        shadow: 'shadow 2s infinite alternate',
      },
    },
  },
};
