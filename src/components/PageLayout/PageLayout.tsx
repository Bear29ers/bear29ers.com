import type { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className: string;
};

const PageLayout: FC<Props> = ({ children, className = '' }) => {
  return <div className={`z-0 inline-block h-full w-full bg-light p-32 ${className}`}> {children}</div>;
};

export default PageLayout;
