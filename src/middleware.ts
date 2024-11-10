import createMiddleware from 'next-intl/middleware';

import { routing } from './i18n/routing';

import type { NextRequest, NextResponse } from 'next/server';

export const middleware = (request: NextRequest): NextResponse<unknown> => {
  const { headers, url, nextUrl } = request;
  let { pathname } = nextUrl;

  // if pathname includes 'gallery', replace it with '/gallery'
  if (pathname.includes('gallery')) {
    pathname = '/gallery';
  }

  const defaultLocale = headers.get('x-request-locale') || 'en';

  const handleI18nRouting = createMiddleware(routing);
  const response = handleI18nRouting(request);

  response.headers.set('x-request-locale', defaultLocale);
  response.headers.set('x-request-url', url);
  response.headers.set('x-request-path', pathname);

  // const requestHeaders = new Headers(headers);
  // requestHeaders.set('x-request-url', url);
  // requestHeaders.set('x-request-path', pathname);

  // const res = NextResponse.next({
  //   request: {
  //     headers: requestHeaders,
  //   },
  // });

  return response;
};

export default createMiddleware(routing);

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(ja|en)/:path*', '/((?!_next|_vercel|.*\\..*).*)'],
};
