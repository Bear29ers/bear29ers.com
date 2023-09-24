import type { FC, ReactNode } from 'react';

import Footer from '@/components/commons/Footer/Footer';
import Navbar from '@/components/commons/Navbar/Navbar';

type Props = {
  isNotHome: boolean;
  children: ReactNode;
};

const PageLayout: FC<Props> = ({ isNotHome, children }) => {
  return (
    <div className="container mx-auto" role="presentation">
      {isNotHome && <Navbar />}
      {children}
      {isNotHome && <Footer />}
    </div>
  );
};

export default PageLayout;
