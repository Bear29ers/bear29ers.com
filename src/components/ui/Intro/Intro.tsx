import { useState, type FC, useEffect } from 'react';

import { motion } from 'motion/react';
import Image from 'next/image';

import useMediaQuery from '@/hooks/useMediaQuery/useMediaQuery';

import type { HomeText } from '@/types/home';

import Memoji from '~/images/memoji.png';

interface Props {
  isClicked: boolean;
  homeProfileText: HomeText;
}

const Intro: FC<Props> = ({ isClicked, homeProfileText }) => {
  const initialIntroWidth = 1000;
  const initialIntroHeight = 294;
  const [introWidth, setIntroWidth] = useState<number>(initialIntroWidth);
  const [introHeight, setIntroHeight] = useState<number>(initialIntroHeight);
  const isUnderXs = useMediaQuery('(max-width: 399px)');
  const isUnderXsm = useMediaQuery('(max-width: 539px)');
  const isUnderSm = useMediaQuery('(max-width: 639px)');
  const isUnderLg = useMediaQuery('(max-width: 1023px)');
  const isUnderXl = useMediaQuery('(max-width: 1279px)');

  useEffect(() => {
    if (isUnderXs) {
      setIntroWidth(240);
      setIntroHeight(480);
    } else if (isUnderXsm) {
      setIntroWidth(320);
      setIntroHeight(480);
    } else if (isUnderSm) {
      setIntroWidth(384);
      setIntroHeight(576);
    } else if (isUnderLg) {
      setIntroWidth(500);
      setIntroHeight(576);
    } else if (isUnderXl) {
      setIntroWidth(800);
      setIntroHeight(230);
    } else {
      setIntroWidth(initialIntroWidth);
      setIntroHeight(initialIntroHeight);
    }
  }, [isUnderXl, isUnderLg, isUnderSm, isUnderXsm, isUnderXs]);

  return (
    <>
      <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
        {isClicked && (
          <motion.div
            className="flex w-60 flex-col items-center justify-center intro-contents-border xs:w-80 xsm:w-96 sm:w-[500px] lg:w-[800px] lg:flex-row lg:items-end xl:w-[1000px]"
            initial={{ width: 0, height: 0 }}
            animate={{ width: `${introWidth}px`, height: `${introHeight}px` }}
            transition={{
              width: { type: 'tween', duration: 0.8, ease: [0.76, 0, 0.24, 1] },
              height: { type: 'spring', duration: 2, delay: 1 },
            }}
            data-testid="intro-contents">
            <div className="flex h-60 w-full flex-col items-start justify-center gap-y-3 p-2 xs:p-6 xsm:h-72 lg:h-fit lg:w-1/2 lg:p-3 xl:px-5 xl:py-8">
              <motion.div
                className="flex flex-col gap-y-1.5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.5 }}>
                <h1 className="text-5xl font-bold text-dark xsm:text-6xl xl:text-7xl">Hi,</h1>
                <h1 className="text-4xl font-semibold text-dark xsm:text-5xl xl:text-6xl">
                  I&apos;m, {homeProfileText.userName}.
                </h1>
              </motion.div>
              <motion.h2
                className="text-lg font-semibold text-lightGray xs:text-xl xsm:text-2xl lg:text-3xl xl:text-4xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 2 }}>
                I&apos;m, {homeProfileText.occupation}.
              </motion.h2>
            </div>
            <motion.div
              className="z-0 flex h-60 w-full items-end justify-center xsm:h-72 lg:h-fit lg:w-1/2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2 }}>
              <Image
                src={Memoji}
                alt={homeProfileText.profileAlt}
                role="img"
                className="h-48 w-fit xs:h-56 xsm:h-64 lg:h-auto lg:w-80 lg:pb-1 xl:w-10/12"
              />
            </motion.div>
          </motion.div>
        )}
      </div>
      <div
        className={`absolute inset-y-0 bg-hitGray bg-auto bg-center bg-repeat intro-transition-bg txs:bg-noise-pattern lg:right-1/2 ${isClicked ? 'h-1/2 w-full lg:h-full lg:w-1/2' : 'size-0 lg:w-2'}`}
      />
    </>
  );
};

export default Intro;
