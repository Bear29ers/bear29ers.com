'use client';

import type { ReactNode } from 'react';

import { motion } from 'motion/react';

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
};

const Template = ({ children }: { children: ReactNode }) => {
  return (
    <motion.main
      variants={variants}
      initial="hidden"
      animate="enter"
      transition={{ type: 'spring', duration: 0.65 }}
      key="Bear29ers">
      {children}
    </motion.main>
  );
};

export default Template;
