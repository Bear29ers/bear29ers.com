import { fontFamily } from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';

import type { Config } from 'tailwindcss';
import type { PluginAPI } from 'tailwindcss/types/config';

const config: Config = {
  content: ['./src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    screens: {
      xl: '1280px',
      lg: '1024px',
      md: '768px',
      sm: '640px',
      xsm: '540px',
      xxs: '500px',
      xs: '400px',
    },
    extend: {
      fontFamily: {
        mont: ['var(--font-mont)', ...fontFamily.sans],
        damion: ['var(--font-damion)', ...fontFamily.sans],
      },
      colors: {
        dark: '#232A36',
        darker: '#1F2632',
        darkGray: '#2C3641',
        darkerGray: '#29313D',
        hitGray: '#7F848B',
        lightGray: '#D2D8D9',
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
  plugins: [
    plugin(function ({ addUtilities }: PluginAPI) {
      addUtilities({
        '.flex-center': {
          '@apply flex items-center justify-center': {},
        },
        '.writing-mode-vertical': {
          'writing-mode': 'vertical-lr',
        },
        '.intro-transition-bg': {
          transition: 'height 0.5s ease, width 1s ease 0.5s',
        },
        '.intro-contents-border': {
          'background': `
            linear-gradient(to right, #232a36 50%, #7f848b 50%) bottom,
            linear-gradient(to right, #232a36 50%, #7f848b 50%) top
          `,
          'background-repeat': 'no-repeat',
          'background-size': '100% 4px',
          'border-right': '4px solid #7f848b',
          'border-left': '4px solid #232a36',
          '@media screen and (max-width: 1023px)': {
            'background': `
              linear-gradient(to bottom, #232a36 50%, #7f848b 50%) right,
              linear-gradient(to bottom, #232a36 50%, #7f848b 50%) left
            `,
            'background-repeat': 'no-repeat',
            'background-size': '4px 100%',
            'border-top': '4px solid #232a36',
            'border-right': 'none',
            'border-bottom': '4px solid #7f848b',
            'border-left': 'none',
          },
        },
      });
    }),
  ],
};

export default config;
