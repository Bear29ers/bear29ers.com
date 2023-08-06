'use client';

import type { FC } from 'react';

import { motion } from 'framer-motion';
import Link from 'next/link';

const MotionLink = motion(Link);

const Logo: FC = () => {
  return (
    <motion.div className="flex-center mt-2">
      <MotionLink
        href="/"
        className="flex-center h-16 w-16 rounded-full bg-dark text-2xl font-bold text-light"
        whileHover={{
          backgroundColor: [
            '#121212',
            'rgba(131,58,180,1)',
            'rgba(253,29,29,1)',
            'rgba(252,176,69,1)',
            'rgba(131,58,180,1)',
            '#121212',
          ],
          transition: { duration: 1, repeat: Infinity },
        }}
        role="link">
        BR
      </MotionLink>
    </motion.div>
  );
};

export default Logo;
