'use client';

import Error from 'next/error';

const GlobalNotFound = () => {
  return (
    <html lang="en">
      <body>
        <Error statusCode={404} title="Page Not Found" />
      </body>
    </html>
  );
};

export default GlobalNotFound;
