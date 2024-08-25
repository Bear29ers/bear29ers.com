import type { FC } from 'react';

import { AnimatePresence, motion } from 'framer-motion';

import MenuList from '../MenuList/MenuList';

const getVariants = (isMobile: boolean) => {
  const variants = isMobile
    ? {
        opened: {
          width: '310px',
          height: '500px',
          top: '-10px',
          right: '-8px',
          transition: { duration: 0.75, type: 'tween', ease: [0.76, 0, 0.24, 1] },
        },
        closed: {
          width: '48px',
          height: '48px',
          top: '0px',
          right: '0px',
          transition: { duration: 0.75, delay: 0.35, type: 'tween', ease: [0.76, 0, 0.24, 1] },
        },
      }
    : {
        opened: {
          width: '500px',
          height: '650px',
          top: '-15px',
          right: '-15px',
          transition: { duration: 0.75, type: 'tween', ease: [0.76, 0, 0.24, 1] },
        },
        closed: {
          width: '56px',
          height: '56px',
          top: '0px',
          right: '0px',
          transition: { duration: 0.75, delay: 0.35, type: 'tween', ease: [0.76, 0, 0.24, 1] },
        },
      };

  return variants;
};

interface Props {
  isOpen: boolean;
  isMobile: boolean;
  pathname: string;
}

const MenuWindow: FC<Props> = ({ isOpen, isMobile, pathname }) => {
  return (
    <motion.div
      layout
      variants={getVariants(isMobile)}
      initial="closed"
      animate={isOpen ? 'opened' : 'closed'}
      style={{ borderRadius: 30 }}
      className="relative h-[500px] w-[310px] bg-darkerGray xsm:h-[650px] xsm:w-[500px] md:bg-darker"
      data-testid="menu-window">
      <AnimatePresence>{isOpen && <MenuList pathname={pathname} />}</AnimatePresence>
    </motion.div>
  );
};

export default MenuWindow;
