import { Montserrat, Damion } from 'next/font/google';

export const montserrat = Montserrat({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-mont',
});

export const damion = Damion({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-damion',
});
