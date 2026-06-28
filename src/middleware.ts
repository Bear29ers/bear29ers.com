import { NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';

import { routing } from './i18n/routing';

import type { NextRequest } from 'next/server';

const handleI18nRouting = createMiddleware(routing);

export const middleware = (request: NextRequest): NextResponse<unknown> => {
  const { url, nextUrl } = request;
  let { pathname } = nextUrl;

  // Normalize gallery paths to strip query-path cruft
  if (pathname.includes('gallery')) {
    pathname = pathname.includes('ja') ? '/ja/gallery' : '/gallery';
  }

  // Run next-intl routing first to determine redirect/rewrite intent
  const intlResponse = handleI18nRouting(request);

  // For redirects (e.g. /en/about → /about with localePrefix: 'as-needed'), pass through directly
  if (!intlResponse.ok) {
    return intlResponse;
  }

  // Build modified request headers so RSC can read them via headers() from 'next/headers'
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-request-url', url);
  requestHeaders.set('x-request-path', pathname);

  // Use NextResponse.rewrite or .next with our custom request headers so that
  // x-middleware-override-headers correctly lists our keys alongside the rewrite intent.
  const rewriteUrl = intlResponse.headers.get('x-middleware-rewrite');
  const response = rewriteUrl
    ? NextResponse.rewrite(new URL(rewriteUrl, url), { request: { headers: requestHeaders } })
    : NextResponse.next({ request: { headers: requestHeaders } });

  // Copy non-internal next-intl response headers (Set-Cookie for locale, Link for hreflang, etc.)
  intlResponse.headers.forEach((value, key) => {
    if (!key.startsWith('x-middleware')) {
      response.headers.set(key, value);
    }
  });

  return response;
};

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(ja|en)/:path*', '/((?!api|_next|_vercel|.*\\..*).*)'],
};
