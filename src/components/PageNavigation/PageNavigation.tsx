import type { FC } from 'react';

import { motion } from 'framer-motion';
import Link from 'next/link';

const MotionLink = motion(Link);

interface Props {
  isClicked: boolean;
}

// TODO: すべてリンクとして使用できるようになったら、個別のリンクとしてコンポーネント化する
const PageNavigation: FC<Props> = ({ isClicked }) => {
  return (
    <>
      <motion.div
        className="absolute -right-4 top-1/2 z-40 -translate-y-1/2 rotate-90 text-xl font-semibold text-white line-through xs:-right-2.5 ssm:right-0 md:text-2xl"
        initial={{ x: 200, rotate: 90 }}
        animate={{ x: 0, rotate: 90 }}
        transition={{ type: 'spring', duration: 1.5, delay: 1.0 }}>
        Works
      </motion.div>
      <div className="absolute bottom-2 flex w-screen justify-around ssm:bottom-3">
        <MotionLink
          href="/about"
          className={`z-40 text-xl font-semibold md:text-2xl ${isClicked ? 'text-white lg:text-dark' : 'text-white'}`}
          initial={{ y: 200 }}
          animate={{ y: 0, transition: { type: 'spring', duration: 1.5, delay: 1.0 } }}
          whileHover={{ scale: 1.1, transition: { type: 'spring', stiffness: 400, damping: 10 } }}
          whileTap={{ scale: 0.9, transition: { type: 'spring', stiffness: 400, damping: 10 } }}>
          About
        </MotionLink>
        <MotionLink
          href="/experience"
          className="z-40 text-xl font-semibold text-white md:text-2xl"
          initial={{ y: 200 }}
          animate={{ y: 0, transition: { type: 'spring', duration: 1.5, delay: 1.0 } }}
          whileHover={{ scale: 1.1, transition: { type: 'spring', stiffness: 400, damping: 10 } }}
          whileTap={{ scale: 0.9, transition: { type: 'spring', stiffness: 400, damping: 10 } }}>
          Experience
        </MotionLink>
      </div>
      <motion.div
        className={`absolute -left-4 top-1/2 z-40 -translate-y-1/2 -rotate-90 text-xl font-semibold line-through xs:-left-2.5 ssm:left-0 md:text-2xl ${isClicked ? 'text-white lg:text-dark' : 'text-white'}`}
        initial={{ x: -200, rotate: -90 }}
        animate={{ x: 0, rotate: -90 }}
        transition={{ type: 'spring', duration: 1.5, delay: 1.0 }}>
        Gallery
      </motion.div>
    </>
  );
};

export default PageNavigation;
