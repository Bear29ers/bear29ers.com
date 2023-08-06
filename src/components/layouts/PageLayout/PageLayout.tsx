import type { FC, ReactNode } from 'react';

import Footer from '@/components/commons/Footer/Footer';
import Navbar from '@/components/commons/Navbar/Navbar';

type Props = {
  children: ReactNode;
};

const PageLayout: FC<Props> = ({ children }) => {
  return (
    <div className="container mx-auto" role="presentation">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default PageLayout;
