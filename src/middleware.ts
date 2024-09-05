import { NextResponse } from 'next/server';

import type { NextRequest } from 'next/server';

export const middleware = (request: NextRequest) => {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-request-url', request.url);

  const res = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  return res;
};
