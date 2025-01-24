import type { ReactNode } from 'react';

import { GoogleAnalytics } from '@next/third-parties/google';
import { headers } from 'next/headers';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';

import ColorPicker from '@/components/common/ColorPicker/ColorPicker';
import Menu from '@/components/common/Menu/Menu';

import convertToPageTitle from '@/utils/conversion/convertToPageTitle';

import { routing } from '@/i18n/routing';
import { montserrat, murecho } from '@/styles/fonts';
import type { Locale } from '@/types/locale';

import type { Metadata, Viewport } from 'next';

import '@/app/globals.scss';

export const generateMetadata = async (): Promise<Metadata> => {
  const t = await getTranslations('meta');

  let url = '';
  let pageTitle = '';
  const description = t('description');
  const headersList = await headers();
  const requestUrl = headersList.get('x-request-url');
  if (requestUrl) {
    const { href, pathname } = new URL(requestUrl);
    url = href;
    pageTitle = convertToPageTitle(pathname);
  } else {
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
      locale: t('locale'),
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

const LocaleLayout = async ({
  children,
  modal,
  params,
}: Readonly<{
  children: ReactNode;
  modal: ReactNode;
  params: Promise<{ locale: Locale }>;
}>) => {
  const { locale } = await params;
  const headersList = await headers();
  const pathname = headersList.get('x-request-path') || '/';

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${montserrat.variable} ${murecho.variable}`}>
      <body
        className={`relative size-full overscroll-y-none bg-dark bg-auto bg-center bg-repeat txs:bg-noise-pattern ${locale === 'en' ? 'font-mont' : 'font-murecho tracking-wider'}`}>
        <NextIntlClientProvider messages={messages}>
          <Menu pathname={pathname} locale={locale} />
          {children}
          {modal}
          <ColorPicker pathname={pathname} />
        </NextIntlClientProvider>
        <GoogleAnalytics gaId={process.env.GA_ID ?? ''} />
      </body>
    </html>
  );
};

export default LocaleLayout;
