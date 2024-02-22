import type { FC } from 'react';

import { motion } from 'framer-motion';
import Image from 'next/image';

import { HOME_PROFILE_TEXT } from '@/common/constants/home';

import Profile from '~/images/memoji.png';

interface Props {
  isClicked: boolean;
}

const Intro: FC<Props> = ({ isClicked }) => {
  return (
    <>
      <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
        {isClicked && (
          <motion.div
            className="intro-contents-bg flex h-[35vh] w-[60vw]"
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
                alt={HOME_PROFILE_TEXT.profileAlt}
                role="img"
                className="absolute bottom-0 left-1/2 h-auto w-full -translate-x-1/2"
              />
            </motion.div>
          </motion.div>
        )}
      </div>
      <div
        className={`intro-transition-bg absolute inset-y-0 right-1/2 bg-dark ${isClicked ? 'h-full w-1/2' : 'h-0 w-2'}`}
      />
    </>
  );
};

export default Intro;
