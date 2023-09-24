import type { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const HomeContentsLayout: FC<Props> = ({ children }) => {
  return (
    <div
      className="pointer-events-auto z-0 mx-auto inline-block h-full max-w-7xl rounded-3xl bg-light p-8 shadow-2xl"
      role="presentation">
      {children}
    </div>
  );
};

export default HomeContentsLayout;
