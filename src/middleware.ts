import createMiddleware from 'next-intl/middleware';

import { routing } from './i18n/routing';

import type { NextRequest, NextResponse } from 'next/server';

export const middleware = (request: NextRequest): NextResponse<unknown> => {
  const { headers, url, nextUrl } = request;
  let { pathname } = nextUrl;

  const defaultLocale = headers.get('x-request-locale') || 'en';

  // if pathname includes 'gallery', replace it with '/gallery'
  if (pathname.includes('gallery')) {
    if (pathname.includes('ja')) {
      pathname = '/ja/gallery';
    } else {
      pathname = '/gallery';
    }
  }

  const handleI18nRouting = createMiddleware(routing);
  const response = handleI18nRouting(request);

  response.headers.set('x-request-locale', defaultLocale);
  response.headers.set('x-request-url', url);
  response.headers.set('x-request-path', pathname);

  return response;
};

export default createMiddleware(routing);

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(ja|en)/:path*', '/((?!api|_next|_vercel|.*\\..*).*)'],
};
