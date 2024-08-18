import type { ReactNode } from 'react';

import { GoogleAnalytics } from '@next/third-parties/google';

import Menu from '@/components/common/Menu/Menu';

import { montserrat } from '@/styles/fonts';

import type { Metadata, Viewport } from 'next';

import '@/app/globals.scss';

export const metadata: Metadata = {
  title: 'Bear29ers',
  description: 'A new portfolio website by Bear29ers.',
  appleWebApp: true,
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
  viewportFit: 'cover',
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
        <GoogleAnalytics gaId={process.env.GA_ID ?? ''} />
      </body>
    </html>
  );
};

export default RootLayout;
