import { NextResponse } from 'next/server';

import type { NextRequest } from 'next/server';

export const middleware = (req: NextRequest) => {
  const requestHeaders = new Headers(req.headers);
  requestHeaders.set('x-request-url', req.url);

  const res = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  return res;
};
