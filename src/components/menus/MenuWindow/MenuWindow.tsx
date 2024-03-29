import type { FC } from 'react';

import { AnimatePresence, motion } from 'framer-motion';

import MenuList from '../MenuList/MenuList';

const variants = {
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

interface Props {
  isOpen: boolean;
}

const MenuWindow: FC<Props> = ({ isOpen }) => {
  return (
    <motion.div
      layout
      variants={variants}
      initial="closed"
      animate={isOpen ? 'opened' : 'closed'}
      style={{ borderRadius: 30 }}
      className="relative h-[650px] w-[500px] bg-poloBlue"
      data-testid="menu-window">
      <AnimatePresence>{isOpen && <MenuList />}</AnimatePresence>
    </motion.div>
  );
};

export default MenuWindow;
