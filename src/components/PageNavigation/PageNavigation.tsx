import type { FC } from 'react';

import { motion } from 'framer-motion';
import Link from 'next/link';

const MotionLink = motion(Link);

interface Props {
  isClicked: boolean;
}

const PageNavigation: FC<Props> = ({ isClicked }) => {
  return (
    <>
      <motion.div
        className="absolute right-0 top-1/2 -translate-y-1/2 rotate-90 text-2xl font-semibold text-white line-through"
        initial={{ x: 200, rotate: 90 }}
        animate={{ x: 0, rotate: 90 }}
        transition={{ type: 'spring', duration: 1.5, delay: 1.0 }}>
        Works
      </motion.div>
      <div className="absolute bottom-3 flex w-screen justify-around">
        <MotionLink
          href="/about"
          className={`z-40 text-2xl font-semibold ${isClicked ? 'text-dark' : 'text-white'}`}
          initial={{ y: 200 }}
          animate={{ y: 0, transition: { type: 'spring', duration: 1.5, delay: 1.0 } }}
          whileHover={{ scale: 1.1, transition: { type: 'spring', stiffness: 400, damping: 10 } }}
          whileTap={{ scale: 0.9, transition: { type: 'spring', stiffness: 400, damping: 10 } }}>
          About
        </MotionLink>
        <MotionLink
          href="/experience"
          className={`z-40 text-2xl font-semibold ${isClicked ? 'text-dark' : 'text-white'}`}
          initial={{ y: 200 }}
          animate={{ y: 0, transition: { type: 'spring', duration: 1.5, delay: 1.0 } }}
          whileHover={{ scale: 1.1, transition: { type: 'spring', stiffness: 400, damping: 10 } }}
          whileTap={{ scale: 0.9, transition: { type: 'spring', stiffness: 400, damping: 10 } }}>
          Experience
        </MotionLink>
      </div>
      <motion.div
        className={`absolute left-0 top-1/2 -translate-y-1/2 -rotate-90 text-2xl font-semibold line-through ${isClicked ? 'text-dark' : 'text-white'}`}
        initial={{ x: -200, rotate: -90 }}
        animate={{ x: 0, rotate: -90 }}
        transition={{ type: 'spring', duration: 1.5, delay: 1.0 }}>
        Gallery
      </motion.div>
    </>
  );
};

export default PageNavigation;
