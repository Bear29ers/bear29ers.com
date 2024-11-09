// import { NextResponse } from 'next/server';
//
// import type { NextRequest } from 'next/server';
//
// export const middleware = (request: NextRequest) => {
//   const { headers, url, nextUrl } = request;
//   let { pathname } = nextUrl;
//
//   // if pathname includes 'gallery', replace it with '/gallery'
//   if (pathname.includes('gallery')) {
//     pathname = '/gallery';
//   }
//
//   const requestHeaders = new Headers(headers);
//   requestHeaders.set('x-request-url', url);
//   requestHeaders.set('x-request-path', pathname);
//
//   const res = NextResponse.next({
//     request: {
//       headers: requestHeaders,
//     },
//   });
//
//   return res;
// };

import createMiddleware from 'next-intl/middleware';

import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(ja|en)/:path*', '/((?!_next|_vercel|.*\\..*).*)'],
};
