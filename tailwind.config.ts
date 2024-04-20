import { fontFamily } from 'tailwindcss/defaultTheme';

import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        mont: ['var(--font-mont)', ...fontFamily.sans],
      },
      colors: {
        dark: '#232A36',
        darker: '#1F2632',
        darkGray: '#2C3641',
        darkerGray: '#29313D',
        hitGray: '#7F848B',
        maximumBlue: '#3AAFC9',
        mediumSlateBlue: '#676CDB',
        mantis: '#75BD53',
        pastelOrange: '#F1B457',
        pastelRed: '#F86B62',
        millbrook: '#634538',
        coffeeBean: '#2D120F',
        tan: '#D1A68F',
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
          '10%': {
            width: '100px',
          },
          '100%': {
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
  plugins: [],
};

export default config;
