import { NextResponse } from 'next/server';

import type { NextRequest } from 'next/server';

export const middleware = (request: NextRequest) => {
  const { headers, url } = request;
  const requestHeaders = new Headers(headers);
  requestHeaders.set('x-request-url', url);

  const res = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  return res;
};
