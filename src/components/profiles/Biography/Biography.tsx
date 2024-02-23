'use client';

import type { FC } from 'react';

import { motion } from 'framer-motion';
import Image from 'next/image';

import { ACHIEVEMENTS, PROFILE_DETAILS, PROFILE_TEXT } from '@/common/constants/about';
import type { Achievement, ProfileDetail } from '@/common/types/about';

import ProfileIcon from '~/images/profile.jpg';

const FramerImage = motion(Image);

const Biography: FC = () => {
  return (
    <div className="flex flex-col px-4">
      <div className="flex-center relative mb-6 w-full max-w-xs">
        <Image src={ProfileIcon} alt={PROFILE_TEXT.userName} className="w-full rounded-full border border-geyser" />
        <div className="flex-center absolute bottom-7 right-7 size-10 rounded-full border border-geyser bg-light text-xl">
          <span>🐻</span>
        </div>
      </div>
      <div className="mb-6 flex flex-col">
        <h2 className="text-2xl font-bold">{PROFILE_TEXT.fullName}</h2>
        <h2 className="text-xl text-hitGray">{PROFILE_TEXT.userName}</h2>
      </div>
      <p className="mb-6 text-lg">{PROFILE_TEXT.greeting}</p>
      <ul>
        {PROFILE_DETAILS.map((profileDetail: ProfileDetail) => (
          <li className="flex items-center gap-x-3" key={profileDetail.type}>
            <div className="size-[18px]">
              <profileDetail.icon />
            </div>
            <span>{profileDetail.content}</span>
          </li>
        ))}
      </ul>
      <hr className="my-8 block h-[1.5px] w-full bg-hitGray" />
      <div className="flex flex-col">
        <h3 className="mb-3 text-lg font-bold">Achievements</h3>
        <div className="flex gap-1">
          {ACHIEVEMENTS.map((achievement: Achievement) => (
            <FramerImage
              src={achievement.src}
              alt={`Achievement: ${achievement.alt}`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              key={achievement.id}
              className="h-auto w-16 cursor-pointer"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Biography;
