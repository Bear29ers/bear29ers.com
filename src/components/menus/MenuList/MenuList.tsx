import type { FC } from 'react';

import { motion } from 'framer-motion';

import { menuItems } from '@/common/constants/menuItems';
import type { MenuItem } from '@/common/types/menuItems';

const variants = {
  initial: {
    opacity: 0,
    translateY: 80,
    translateX: -20,
  },
  enter: (i: number) => ({
    opacity: 1,
    translateY: 0,
    translateX: 0,
    transition: {
      duration: 0.65,
      delay: 0.5 + i * 0.1,
      ease: [0.215, 0.61, 0.355, 1],
      // opacity: { duration: 0.65 },
    },
  }),

  exit: {
    opacity: 0,
    transition: { duration: 0.5, type: 'linear', ease: [0.76, 0, 0.24, 1] },
  },
};

const MenuList: FC = () => {
  return (
    <div className="flex-center relative h-full">
      <div className="flex w-fit flex-col items-start gap-y-5">
        {menuItems.map((menuItem: MenuItem, index: number) => (
          <div key={menuItem.id}>
            <motion.div
              custom={index}
              variants={variants}
              initial="initial"
              animate="enter"
              exit="exit"
              className="text-5xl font-bold">
              <a href={menuItem.href}>{menuItem.text}</a>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuList;
