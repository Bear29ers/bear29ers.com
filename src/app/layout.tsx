import { Montserrat } from 'next/font/google';

import Menu from '@/components/Menu/Menu';

import type { Metadata } from 'next';

import '@/app/globals.scss';

const montserrat = Montserrat({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-mont',
});

export const metadata: Metadata = {
  title: 'Bear29ers',
  description: '[WIP]A brand-new portfolio site "bear29ers.com".',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} relative size-full font-mont`}>
        <Menu />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
