import { NextResponse } from 'next/server';

import type { NextRequest } from 'next/server';

export const middleware = (req: NextRequest): NextResponse => {
  if (process.env.NEXT_PUBLIC_VERCEL_ENV === 'preview') {
    const basicAuth = req.headers.get('authorization');
    const url = req.nextUrl;
    if (basicAuth) {
      const authValue = basicAuth.split(' ')[1] ?? '';
      const [user, pwd] = atob(authValue).split(':');

      if (user === process.env.BASIC_USERNAME && pwd === process.env.BASIC_PASSWORD) {
        return NextResponse.next();
      }
    }

    url.pathname = '/api/auth';
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
};
