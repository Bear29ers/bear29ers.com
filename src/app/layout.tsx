import type { ReactNode } from 'react';

import Menu from '@/components/common/Menu/Menu';

import { montserrat } from '@/utils/fonts';

import type { Metadata } from 'next';

import '@/app/globals.scss';

export const metadata: Metadata = {
  title: 'Bear29ers',
  description: 'A new portfolio website by Bear29ers.',
  appleWebApp: true,
};

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} relative size-full overscroll-y-none bg-dark bg-noise-pattern bg-auto bg-center bg-repeat font-mont`}>
        <Menu />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
