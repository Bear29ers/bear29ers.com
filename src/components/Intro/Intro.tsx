/* eslint-disable tailwindcss/no-custom-classname */
import type { FC } from 'react';

import Image from 'next/image';

import { HOME_PROFILE_TEXT } from '@/constants/home';

import Profile from '../../../public/images/memoji.png';

const Intro: FC = () => {
  return (
    <div className="intro-dark-bg flex w-[60vw]">
      <div className="relative flex w-1/2 flex-col gap-y-10">
        <h1 className="text-6xl font-bold text-iron">Hi,</h1>
        <h1 className="text-5xl font-semibold text-iron">I&apos;m, {HOME_PROFILE_TEXT.userName}.</h1>
        <h2 className="text-2xl font-semibold text-iron">I&apos;m, {HOME_PROFILE_TEXT.occupation}.</h2>
      </div>
      <div className="relative flex w-1/2 text-white">
        <Image
          src={Profile}
          alt="bear29ers"
          role="img"
          className="absolute bottom-0 left-1/2 h-auto w-full -translate-x-1/2"
        />
      </div>
    </div>
  );
};

export default Intro;
