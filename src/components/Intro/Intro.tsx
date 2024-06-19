import { useState, type FC, useEffect } from 'react';

import { motion } from 'framer-motion';
import Image from 'next/image';

import useMediaQuery from '@/common/hooks/useMediaQuery';
import type { HomeText } from '@/common/types/home';

import Memoji from '~/images/memoji.png';

interface Props {
  isClicked: boolean;
  homeProfileText: HomeText;
}

const Intro: FC<Props> = ({ isClicked, homeProfileText }) => {
  const [introHeight, setIntroHeight] = useState<number>(294);
  const heightUnderXL = useMediaQuery('(max-width: 1279px)');
  const heightUnderLg = useMediaQuery('(max-width: 1023px)');

  useEffect(() => {
    if (heightUnderLg) {
      setIntroHeight(576);
    } else if (heightUnderXL) {
      setIntroHeight(230);
    } else {
      setIntroHeight(294);
    }
  }, [heightUnderXL, heightUnderLg]);

  return (
    <>
      <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
        {isClicked && (
          <motion.div
            className="intro-contents-bg flex w-[500px] flex-col items-center justify-center lg:w-[800px] lg:flex-row lg:items-end xl:w-[1000px]"
            initial={{ height: 0 }}
            animate={{ height: `${introHeight}px` }}
            transition={{ type: 'spring', duration: 2, delay: 1 }}>
            <div className="flex h-72 w-full flex-col items-start justify-center gap-y-3 p-6 lg:h-fit lg:w-1/2 lg:p-3 xl:px-5 xl:py-8">
              <motion.div
                className="flex flex-col gap-y-1.5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.5 }}>
                <h1 className="text-6xl font-bold text-dark xl:text-7xl">Hi,</h1>
                <h1 className="text-5xl font-semibold text-dark xl:text-6xl">I&apos;m, {homeProfileText.userName}.</h1>
              </motion.div>
              <motion.h2
                className="text-2xl font-semibold text-lightGray lg:text-3xl xl:text-4xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 2 }}>
                I&apos;m, {homeProfileText.occupation}.
              </motion.h2>
            </div>
            <motion.div
              className="z-0 flex h-72 w-full items-end justify-center lg:h-fit lg:w-1/2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2 }}>
              <Image
                src={Memoji}
                alt={homeProfileText.profileAlt}
                role="img"
                className="h-64 w-fit lg:h-auto lg:w-80 lg:pb-1 xl:w-10/12"
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
