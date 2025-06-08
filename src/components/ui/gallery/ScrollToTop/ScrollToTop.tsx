'use client';

import { useState, type FC, useEffect } from 'react';

import { useAtom } from 'jotai';
import { AnimatePresence, motion } from 'motion/react';
import { usePathname } from 'next/navigation';

import getCustomColorClass from '@/utils/getCustomColorClass';

import { themeColor } from '@/state/colors';

const ScrollToTop: FC = () => {
  const [selectedThemeColor, _] = useAtom(themeColor);
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const pathname = usePathname();
  const expectionPathList = ['/', '/ja'];

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', updatePosition);

    return () => window.removeEventListener('scroll', updatePosition);
  }, []);

  const customBgColorClass = getCustomColorClass('bg', selectedThemeColor, 500);
  const customBgHoverColorClass = getCustomColorClass('hover:bg', selectedThemeColor, 600);
  const buttonColor = `${customBgColorClass} ${customBgHoverColorClass}`;

  const scrollToTop = () => {
    document.documentElement.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (expectionPathList.includes(pathname)) {
    return null;
  }

  return (
    <AnimatePresence>
      {scrollPosition > 100 && (
        <div className="fixed bottom-4 right-4 xsm:right-8 lg:right-10">
          <motion.button
            type="button"
            className={`size-9 rounded-full transition-colors duration-300 flex-center txs:size-14 ${buttonColor}`}
            onClick={scrollToTop}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { duration: 0.6 } }}
            exit={{ opacity: 0, transition: { duration: 0.4 } }}
            whileHover={{ scale: 1.1, transition: { type: 'spring', stiffness: 400, damping: 10 } }}
            whileTap={{ scale: 0.9, transition: { type: 'spring', stiffness: 400, damping: 10 } }}>
            <svg
              className="size-6 text-white txs:size-8"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="chevron-up"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512">
              <path
                fill="currentColor"
                d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"
              />
            </svg>
          </motion.button>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
