'use client';

import { useContext, useRef } from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import { LayoutRouterContext } from 'next/dist/shared/lib/app-router-context';
import { usePathname } from 'next/navigation';

const FrozenRouter = ({ children }: { children: React.ReactNode }) => {
  const context = useContext(LayoutRouterContext ?? {});
  const frozen = useRef(context).current;

  if (!frozen) {
    return <>children</>;
  }

  return <LayoutRouterContext.Provider value={frozen}>{children}</LayoutRouterContext.Provider>;
};

interface Variants {
  [key: string]: {
    opacity: number;
    x: number;
    y: number;
  };
}

const getVariantsByHref = (href: string): Variants => {
  // TODO: 別ページ遷移を解放の際にcaseを追加
  switch (href) {
    case 'about':
      return {
        hidden: { opacity: 0, x: 0, y: 200 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 0, y: -100 },
      };
    default:
      return {
        hidden: { opacity: 0, x: 0, y: 200 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 0, y: -100 },
      };
  }
};

const PageTransitionEffect = ({ children, href }: { children: React.ReactNode; href: string }) => {
  const key = usePathname();
  const variants = getVariantsByHref(href);

  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        key={key}
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ type: 'spring' }}
        className="overflow-hidden">
        <FrozenRouter>{children}</FrozenRouter>
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransitionEffect;
