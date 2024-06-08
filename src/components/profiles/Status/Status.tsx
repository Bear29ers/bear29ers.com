import type { FC } from 'react';

import { motion } from 'framer-motion';
import Image from 'next/image';

import { PROFILE_DETAILS, PROFILE_TEXT, TEAMS } from '@/common/constants/about';
import { SOCIAL_MEDIA_LIST } from '@/common/constants/socialMedia';
import getIconComponent from '@/common/functions/getIconComponent';
import type { ProfileDetail, Team } from '@/common/types/about';
import type { SocialMedia } from '@/common/types/socialMedia';

import ProfileIcon from '~/images/profile.png';

const FramerImage = motion(Image);

const Status: FC = () => {
  return (
    <div className="flex-center h-[360px]">
      <div className="flex-center relative -mr-32 size-[360px] rounded-full bg-darkGray">
        <div className="flex-center size-80 rounded-full bg-darker">
          <Image src={ProfileIcon} alt={PROFILE_TEXT.userName} className="w-52" />
        </div>
        <span className="absolute left-32 top-12 size-3 rounded-full bg-mantis" />
        <motion.span
          className="absolute left-6 top-16 size-9 rounded-lg bg-maximumBlue"
          initial={{ rotate: 60 }}
          whileHover={{ scale: 1.2, rotate: 240 }}
          transition={{ type: 'spring', stiffness: 400 }}
        />
        <span className="absolute bottom-36 left-4 size-4 rounded-full bg-mediumSlateBlue" />
        <motion.span
          className="absolute right-0 top-9 size-12 rounded-lg bg-mediumSlateBlue"
          initial={{ rotate: 30 }}
          whileHover={{ scale: 1.2, rotate: 210 }}
          transition={{ type: 'spring', stiffness: 400 }}
        />
        <span className="absolute bottom-28 right-16 size-2.5 rounded-full bg-maximumBlue" />
        <motion.span
          className="absolute bottom-6 right-24 size-7 rounded-md bg-mantis"
          initial={{ rotate: 15 }}
          whileHover={{ scale: 1.2, rotate: 195 }}
          transition={{ type: 'spring', stiffness: 400 }}
        />
      </div>
      <div>
        <div className="flex gap-x-10 rounded-3xl bg-darkGray py-10 pl-48 pr-16">
          <div className="flex flex-col gap-y-8">
            <div>
              <h2 className="text-2xl font-bold">{PROFILE_TEXT.fullName}</h2>
              <h4 className="text-xl text-lightGray">{PROFILE_TEXT.userName}</h4>
            </div>
            <ul className="flex flex-col gap-y-2">
              {PROFILE_DETAILS.map((profileDetail: ProfileDetail) => (
                <li className="flex items-center gap-x-3" key={profileDetail.type}>
                  <div className="size-[18px]">
                    <profileDetail.icon />
                  </div>
                  <span>{profileDetail.content}</span>
                </li>
              ))}
            </ul>
          </div>
          <span className="w-0.5 bg-white" />
          <div className="flex flex-col gap-y-4">
            <div className="flex flex-col gap-y-2">
              <h3 className="text-xl font-bold">Contacts</h3>
              <div className="flex gap-x-4">
                {SOCIAL_MEDIA_LIST.map((socialMedia: SocialMedia) => (
                  <motion.a
                    href={socialMedia.href}
                    target="_blank"
                    className="size-14"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                    key={socialMedia.id}>
                    {getIconComponent(socialMedia.text, false)}
                  </motion.a>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-y-2">
              <h3 className="text-xl font-bold">My Favorite Teams</h3>
              <div className="flex gap-x-2">
                {TEAMS.map((team: Team) => (
                  <FramerImage
                    src={team.src}
                    alt={`${team.alt}`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                    key={team.id}
                    className="size-16 cursor-pointer rounded-full"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Status;
