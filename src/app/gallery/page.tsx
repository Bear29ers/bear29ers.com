import AnimatedText from '@/components/common/AnimatedText/AnimatedText';
import Footer from '@/components/layout/Footer/Footer';

import type { NextPage } from 'next';

const Gallery: NextPage = () => {
  return (
    <div className="flex w-full flex-col items-center px-2.5 text-white xs:px-5 lg:px-0">
      <div className="my-24">
        <AnimatedText text="Gallery" classes="text-[48px] xs:text-[60px] xsm:text-[80px]" />
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Gallery;
