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

const variants = {
  hidden: { opacity: 0, x: 0, y: 200 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

const PageTransitionEffect = ({ children }: { children: React.ReactNode }) => {
  const key = usePathname();

  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        key={key}
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ type: 'linear' }}
        className="overflow-hidden">
        <FrozenRouter>{children}</FrozenRouter>
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransitionEffect;
