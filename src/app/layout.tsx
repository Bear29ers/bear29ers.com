import type { ReactNode } from 'react';

// NOTE: Since we have a `not-found.tsx` page on the root, a layout file is required, even if it's just passing children through.
const RootLayout = ({ children }: { children: ReactNode }) => {
  return children;
};

export default RootLayout;
