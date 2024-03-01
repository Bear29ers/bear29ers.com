import type { FC } from 'react';

import { motion } from 'framer-motion';

import { MENU_ITEMS } from '@/common/constants/menuItems';
import { SOCIAL_MEDIA_LIST } from '@/common/constants/socialMedia';
import getIconComponent from '@/common/functions/getIconComponent';
import type { MenuItem } from '@/common/types/menuItems';
import type { SocialMedia } from '@/common/types/socialMedia';

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
    <div className="flex-center relative h-full flex-col">
      <div className="flex w-fit flex-col items-start gap-y-5">
        {MENU_ITEMS.map((menuItem: MenuItem, index: number) => (
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
      <div className="flex items-center gap-x-6 pt-20">
        {SOCIAL_MEDIA_LIST.map((socialMedia: SocialMedia) => (
          <motion.a
            href={socialMedia.href}
            target="_blank"
            className="size-10"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            key={socialMedia.id}>
            {getIconComponent(socialMedia.text, false)}
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default MenuList;
