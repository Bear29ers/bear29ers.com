import type { FC } from 'react';

import { motion } from 'framer-motion';

import { MENU_ITEMS } from '@/common/constants/menuItems';
import { SOCIAL_MEDIA_LIST } from '@/common/constants/socialMedia';
import getIconComponent from '@/common/functions/getIconComponent';
import type { MenuItem } from '@/common/types/menuItems';
import type { SocialMedia } from '@/common/types/socialMedia';

const activeMenuVariants = {
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
    },
  }),
  exit: {
    opacity: 0,
    transition: { duration: 0.5, type: 'linear', ease: [0.76, 0, 0.24, 1] },
  },
};

const inactiveMenuVariants = {
  initial: {
    opacity: 0,
    translateY: 80,
    translateX: -20,
  },
  enter: (i: number) => ({
    opacity: 0.25,
    translateY: 0,
    translateX: 0,
    transition: {
      duration: 0.65,
      delay: 0.5 + i * 0.1,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
  exit: {
    opacity: 0,
    transition: { duration: 0.5, type: 'linear', ease: [0.76, 0, 0.24, 1] },
  },
};

const socialVariants = {
  initial: {
    opacity: 0,
  },
  enter: (i: number) => ({
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.75 + i * 0.2,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
  exit: {
    opacity: 0,
    transition: { duration: 0.5, type: 'tween', ease: 'easeInOut' },
  },
};

const MenuList: FC = () => {
  return (
    <div className="relative h-full flex-col flex-center">
      <div className="flex w-fit flex-col items-start gap-y-5">
        {MENU_ITEMS.map((menuItem: MenuItem, i: number) => (
          <div key={menuItem.id}>
            <motion.div
              variants={menuItem.isAvaliable ? activeMenuVariants : inactiveMenuVariants}
              initial="initial"
              custom={i}
              animate="enter"
              exit="exit"
              whileHover={{ scale: menuItem.isAvaliable ? 1.1 : 1.0 }}
              whileTap={{ scale: menuItem.isAvaliable ? 0.9 : 1.0 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              className="text-3xl font-bold text-white xsm:text-5xl">
              <a href={menuItem.href} className={`${menuItem.isAvaliable ? '' : 'pointer-events-none line-through'}`}>
                {menuItem.text}
              </a>
            </motion.div>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-x-6 pt-20">
        {SOCIAL_MEDIA_LIST.map((socialMedia: SocialMedia, i: number) => (
          <motion.a
            href={socialMedia.href}
            target="_blank"
            className="size-10"
            variants={socialVariants}
            initial="initial"
            custom={i}
            animate="enter"
            exit="exit"
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
