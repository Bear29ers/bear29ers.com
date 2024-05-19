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
            className="intro-contents-bg max-w[1600px] flex h-[35vh] max-h-96 min-h-64 w-[60vw] min-w-[1000px]"
            initial={{ height: 0 }}
            animate={{ height: '35vh' }}
            transition={{ type: 'spring', duration: 2, delay: 1 }}>
            <div className="relative flex w-1/2 flex-col justify-evenly p-5">
              <div className="flex flex-col gap-y-1.5">
                <h1 className="text-7xl font-bold text-dark">Hi,</h1>
                <h1 className="text-6xl font-semibold text-dark">I&apos;m, {homeProfileText.userName}.</h1>
              </div>
              <motion.h2
                className="text-4xl font-semibold text-lightGray"
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
              {/* TODO: 画像が荒いので修正 */}
              <Image
                src={Memoji}
                alt={homeProfileText.profileAlt}
                role="img"
                className="absolute bottom-0 left-1/2 h-auto w-full -translate-x-1/2 pb-1"
              />
            </motion.div>
          </motion.div>
        )}
      </div>
      <div
        className={`intro-transition-bg absolute inset-y-0 right-1/2 bg-hitGray ${isClicked ? 'h-full w-1/2' : 'h-0 w-2'}`}
      />
    </>
  );
};

export default Intro;
