import type { FC, ReactNode } from 'react';

import Navbar from '../Navbar/Navbar';

type Props = {
  children: ReactNode;
};

const PageLayout: FC<Props> = ({ children }) => {
  return (
    <div role="presentation">
      <Navbar />
      {children}
    </div>
  );
};

export default PageLayout;
