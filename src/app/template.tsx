'use client';

import type { ReactNode } from 'react';

import { motion } from 'framer-motion';

const variants = {
  hidden: { opacity: 0, x: 0, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
};

const Template = ({ children }: { children: ReactNode }) => {
  return (
    <motion.main
      variants={variants}
      initial="hidden"
      animate="enter"
      transition={{ type: 'linear', duration: 0.25 }}
      key="Bear29ers">
      {children}
    </motion.main>
  );
};

export default Template;
