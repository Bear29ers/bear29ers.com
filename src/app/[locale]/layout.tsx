import type { ReactNode } from 'react';

import { GoogleAnalytics } from '@next/third-parties/google';
import { headers } from 'next/headers';

import Menu from '@/components/common/Menu/Menu';

import convertToPageTitle from '@/utils/conversion/convertToPageTitle';

import { montserrat } from '@/styles/fonts';

import type { Metadata, Viewport } from 'next';

import '@/app/globals.scss';

export const generateMetadata = (): Metadata => {
  let url = '';
  let pageTitle = '';
  const description =
    'This portfolio is a dynamic platform where I, as a frontend engineer, experiment with cutting-edge technologies and showcase my projects.';
  const requestUrl = headers().get('x-request-url');
  if (requestUrl) {
    const { href, pathname } = new URL(requestUrl);
    url = href;
    pageTitle = convertToPageTitle(pathname);
  } else {
    // eslint-disable-next-line no-console
    console.error('x-request-url header is missing');
  }

  return {
    title: `${pageTitle}Bear29ers`,
    description,
    appleWebApp: true,
    openGraph: {
      title: `${pageTitle}Bear29ers`,
      description,
      url,
      siteName: 'Bear29ers',
      locale: 'ja_JP',
      type: 'website',
    },
    twitter: {
      title: `${pageTitle}Bear29ers`,
      description,
      card: 'summary_large_image',
    },
  };
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
  viewportFit: 'cover',
};

const RootLayout = ({
  children,
  modal,
}: Readonly<{
  children: ReactNode;
  modal: ReactNode;
}>) => {
  const pathname = headers().get('x-request-path') || '/';

  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} relative size-full overscroll-y-none bg-dark bg-auto bg-center bg-repeat font-mont txs:bg-noise-pattern`}>
        <Menu pathname={pathname} />
        {children}
        {modal}
        <GoogleAnalytics gaId={process.env.GA_ID ?? ''} />
      </body>
    </html>
  );
};

export default RootLayout;
