import type { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const PageLayout: FC<Props> = ({ children }) => {
  return (
    <div className="container mx-auto" role="presentation">
      {/* <Navbar /> */}
      {children}
      {/* <Footer /> */}
    </div>
  );
};

export default PageLayout;
