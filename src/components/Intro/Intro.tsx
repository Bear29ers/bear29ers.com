import type { FC } from 'react';

import { motion } from 'framer-motion';
import Image from 'next/image';

import type { HomeText } from '@/common/types/home';

import Memoji from '~/images/memoji.png';

interface Props {
  isClicked: boolean;
  homeProfileText: HomeText;
}

const Intro: FC<Props> = ({ isClicked, homeProfileText }) => {
  return (
    <>
      <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
        {isClicked && (
          <motion.div
            className="intro-contents-bg flex flex-col lg:max-h-64 lg:min-h-64 lg:w-[60vw] lg:min-w-[780px] lg:flex-row xl:h-[35vh] xl:max-h-96 xl:min-w-[1000px] xl:max-w-[1600px]"
            initial={{ height: 0 }}
            animate={{ height: '35vh' }}
            transition={{ type: 'spring', duration: 2, delay: 1 }}>
            <div className="relative flex w-1/2 flex-col justify-center gap-y-3 p-3 xl:justify-evenly xl:gap-y-0 xl:p-5">
              <div className="flex flex-col gap-y-1.5">
                <h1 className="text-6xl font-bold text-dark xl:text-7xl">Hi,</h1>
                <h1 className="text-5xl font-semibold text-dark xl:text-6xl">I&apos;m, {homeProfileText.userName}.</h1>
              </div>
              <motion.h2
                className="text-3xl font-semibold text-lightGray xl:text-4xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.5 }}>
                I&apos;m, {homeProfileText.occupation}.
              </motion.h2>
            </div>
            <motion.div
              className="relative z-0 flex w-1/2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2 }}>
              <Image
                src={Memoji}
                alt={homeProfileText.profileAlt}
                role="img"
                className="absolute bottom-0 left-1/2 h-auto w-80 -translate-x-1/2 pb-1 xl:w-10/12"
              />
            </motion.div>
          </motion.div>
        )}
      </div>
      <div
        className={`intro-transition-bg absolute inset-y-0 bg-hitGray lg:right-1/2 ${isClicked ? 'h-1/2 w-full lg:h-full lg:w-1/2' : 'size-0 lg:w-2'}`}
      />
    </>
  );
};

export default Intro;
