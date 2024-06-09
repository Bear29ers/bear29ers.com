import type { ReactNode } from 'react';

import Menu from '@/components/Menu/Menu';

import { montserrat } from '@/common/utils/fonts';

import type { Metadata } from 'next';

import '@/app/globals.scss';

export const metadata: Metadata = {
  title: 'Bear29ers',
  description: '[WIP]A brand-new portfolio site "bear29ers.com".',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} relative size-full overscroll-y-none font-mont`}>
        <Menu />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
