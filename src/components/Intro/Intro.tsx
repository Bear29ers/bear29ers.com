/* eslint-disable tailwindcss/no-custom-classname */
import type { FC } from 'react';

import { motion } from 'framer-motion';
import Image from 'next/image';

import { HOME_PROFILE_TEXT } from '@/constants/home';

import Profile from '../../../public/images/memoji.png';

const Intro: FC = () => {
  return (
    <motion.div
      className="intro-dark-bg flex h-[35vh] w-[60vw]"
      initial={{ height: 0 }}
      animate={{ height: '35vh' }}
      transition={{ type: 'spring', duration: 2, delay: 1 }}>
      <div className="relative flex w-1/2 flex-col justify-evenly p-5">
        <h1 className="text-7xl font-bold text-iron">Hi,</h1>
        <h1 className="text-6xl font-semibold text-iron">I&apos;m, {HOME_PROFILE_TEXT.userName}.</h1>
        <motion.h2
          className="text-4xl font-semibold text-hitGray"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}>
          I&apos;m, {HOME_PROFILE_TEXT.occupation}.
        </motion.h2>
      </div>
      <motion.div
        className="relative flex w-1/2 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}>
        <Image
          src={Profile}
          alt="bear29ers"
          role="img"
          className="absolute bottom-0 left-1/2 h-auto w-full -translate-x-1/2"
        />
      </motion.div>
    </motion.div>
  );
};

export default Intro;
