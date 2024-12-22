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
      mlg: '1000px',
      md: '768px',
      msm: '700px',
      sm: '640px',
      xsm: '540px',
      xxs: '500px',
      txs: '450px',
      xs: '400px',
    },
    extend: {
      width: {
        '4.5': '1.125rem',
      },
      fontFamily: {
        mont: ['var(--font-mont)', ...fontFamily.sans],
        murecho: ['var(--font-murecho)', ...fontFamily.sans],
        damion: ['var(--font-damion)', ...fontFamily.sans],
      },
      colors: {
        dark: '#232A36',
        darker: '#1F2632',
        darkGray: '#2C3641',
        darkerGray: '#29313D',
        hitGray: '#7F848B',
        lightGray: '#D2D8D9',
        millbrook: '#634538',
        coffeeBean: '#2D120F',
        tan: '#D1A68F',
        customViolet: {
          100: '#ECEEFE',
          200: '#D9DCFD',
          300: '#C6CAFC',
          400: '#969AE9',
          500: '#676CDB',
          600: '#5056C9',
          700: '#3A41B7',
          800: '#262CA5',
          900: '#121793',
        },
        customCyan: {
          100: '#E6F7FB',
          200: '#C2EAF4',
          300: '#9DDCED',
          400: '#79CFE6',
          500: '#3AAFC9',
          600: '#2E8FA6',
          700: '#237084',
          800: '#185262',
          900: '#0D3340',
        },
        customGreen: {
          100: '#EDF7E9',
          200: '#D6ECC9',
          300: '#BFDFAA',
          400: '#97CE7A',
          500: '#75BD53',
          600: '#5EA442',
          700: '#488B32',
          800: '#337223',
          900: '#1F5914',
        },
        customOrange: {
          100: '#FEF6E6',
          200: '#FCE9C2',
          300: '#F9D99F',
          400: '#F5C77B',
          500: '#F1B457',
          600: '#E09633',
          700: '#C97A1E',
          800: '#B25F11',
          900: '#9A4507',
        },
        customRed: {
          100: '#FFDEDD',
          200: '#FFBEB9',
          300: '#FF9E96',
          400: '#FF7E73',
          500: '#F86B62',
          600: '#E55550',
          700: '#D23F3F',
          800: '#BE2A2E',
          900: '#AB151D',
        },
      },
      backgroundImage: {
        'noise-pattern': "url('/images/noise-pattern.png')",
        'gradient-to-transparent': `linear-gradient(
          to top,
          rgba(255, 255, 255, 1) 0%,
          rgba(255, 255, 255, 1) 50%,
          rgba(255, 255, 255, 0.8) 60%,
          rgba(255, 255, 255, 0.6) 70%,
          rgba(255, 255, 255, 0.4) 80%,
          rgba(255, 255, 255, 0.2) 90%,
          rgba(255, 255, 255, 0) 100%
        )`,
      },
      zIndex: {
        '60': '60',
      },
      transformOrigin: {
        '70': '70% 70%',
      },
      transitionTimingFunction: {
        'ease': 'ease',
        'custom-ease-in-out-quart': 'cubic-bezier(0.65, 0, 0.076, 1)',
      },
      transitionDuration: {
        '400': '400ms',
        '450': '450ms',
      },
      aspectRatio: {
        polaroid: '4/5',
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
        wave: {
          '0%': { transform: 'rotate(0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10deg)' },
          '60%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        hit: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-10deg)' },
        },
        down: {
          '0%': {
            transform: 'translateY(-10px)',
          },
          '100%': {
            transform: 'translateY(0)',
          },
        },
        pathCircle: {
          '25%': { strokeDashoffset: '125' },
          '50%': { strokeDashoffset: '175' },
          '75%': { strokeDashoffset: '225' },
          '100%': { strokeDashoffset: '275' },
        },
        pathTriangle: {
          '33%': { strokeDashoffset: '74' },
          '66%': { strokeDashoffset: '147' },
          '100%': { strokeDashoffset: '221' },
        },
        dotTriangle: {
          '33%': { transform: 'translate(0, 0)' },
          '66%': { transform: 'translate(10px, -18px)' },
          '100%': { transform: 'translate(-10px, -18px)' },
        },
        pathRect: {
          '25%': { strokeDashoffset: '64' },
          '50%': { strokeDashoffset: '128' },
          '75%': { strokeDashoffset: '192' },
          '100%': { strokeDashoffset: '256' },
        },
        dotRect: {
          '25%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(18px, -18px)' },
          '75%': { transform: 'translate(0, -36px)' },
          '100%': { transform: 'translate(-18px, -18px)' },
        },
      },
      animation: {
        updown: 'updown 2s infinite alternate',
        blink: 'blink 1s infinite alternate',
        nose: 'nose 3s infinite',
        shadow: 'shadow 2s infinite alternate',
        wave: 'wave 2.5s infinite alternate',
        hit: 'hit 0.4s cubic-bezier(0.63, 0.09, 0.75, 0.46) infinite alternate',
        bounce: 'bounce 0.4s cubic-bezier(0.63, 0.09, 0.76, 0.45) infinite alternate',
        down: 'down 0.6s 0.6s ease-in infinite alternate forwards',
        pathCircle: 'pathCircle 3s cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite',
        pathTriangle: 'pathTriangle 3s cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite',
        dotTriangle: 'dotTriangle 3s cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite',
        pathRect: 'pathRect 3s cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite',
        dotRect: 'dotRect 3s cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite',
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
        '.bear-body-radius': {
          'border-radius': '50% / 40% 40% 60% 60%',
        },
        '.bear-nose-radius': {
          'border-radius': '50% / 60% 60% 30% 30%',
        },
        '.bear-nose-inner-radius': {
          'border-radius': '50% / 40% 40% 60% 60%',
          '&::after': {
            'position': 'absolute',
            'bottom': '-5px',
            'left': '50%',
            'width': '10px',
            'height': '10px',
            'content': '""',
            'background': '#2d120f',
            'border-radius': '50%',
            'box-shadow': '9px 2.4px 0 #d1a68f, -9px 2.4px 0 #d1a68f',
            'transform': 'translateX(-50%)',
          },
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
