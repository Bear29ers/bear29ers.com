import type { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const TopContentsLayout: FC<Props> = ({ children }) => {
  return (
    <div className="pointer-events-auto z-0 inline-block h-full w-full rounded-3xl bg-light p-8" role="presentation">
      {children}
    </div>
  );
};

export default TopContentsLayout;
