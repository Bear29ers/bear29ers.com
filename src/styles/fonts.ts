// eslint-disable-next-line camelcase
import { Montserrat, Damion, Murecho } from 'next/font/google';

export const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-mont',
  display: 'swap',
});

export const murecho = Murecho({
  subsets: ['latin'],
  variable: '--font-murecho',
  display: 'swap',
});

export const damion = Damion({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-damion',
  display: 'swap',
});
