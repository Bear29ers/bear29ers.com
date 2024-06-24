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
    <div className="flex-center flex-col xl:flex-row">
      <div className="flex-center relative -mb-40 mr-0 size-[250px] rounded-full bg-darkGray xs:size-[294px] xxs:size-[328px] md:size-[360px] xl:-mr-32 xl:mb-0">
        <div className="flex-center size-56 rounded-full bg-darker xs:size-64 xxs:size-72 md:size-80">
          <Image src={ProfileIcon} alt={PROFILE_TEXT.userName} className="w-28 xs:w-36 xxs:w-44 md:w-52" />
        </div>
        <span className="absolute left-32 top-9 size-2 rounded-full bg-mantis xs:top-12 xs:size-3" />
        <motion.span
          className="absolute left-6 top-12 size-7 rounded-lg bg-maximumBlue xs:top-16 xxs:size-9"
          initial={{ rotate: 60 }}
          whileHover={{ scale: 1.2, rotate: 240 }}
          transition={{ type: 'spring', stiffness: 400 }}
        />
        <span className="absolute bottom-24 left-4 size-3 rounded-full bg-mediumSlateBlue xs:bottom-36 xs:size-4" />
        <motion.span
          className="absolute right-0 top-9 size-10 rounded-lg bg-mediumSlateBlue xxs:size-12"
          initial={{ rotate: 30 }}
          whileHover={{ scale: 1.2, rotate: 210 }}
          transition={{ type: 'spring', stiffness: 400 }}
        />
        <span className="absolute bottom-28 right-10 size-1.5 rounded-full bg-maximumBlue xs:right-16 xs:size-2.5" />
        <motion.span
          className="absolute bottom-6 right-24 size-5 rounded-md bg-mantis xxs:size-7"
          initial={{ rotate: 15 }}
          whileHover={{ scale: 1.2, rotate: 195 }}
          transition={{ type: 'spring', stiffness: 400 }}
        />
      </div>
      <div className="w-full xl:w-fit">
        <div className="flex flex-col items-center justify-center gap-10 rounded-3xl bg-darkGray px-16 pb-16 pt-48 md:flex-row lg:gap-x-16 xl:gap-x-10 xl:py-10 xl:pl-48 xl:pr-16">
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
          <div className="flex flex-col gap-y-10 md:gap-y-4">
            <div className="flex flex-col gap-y-4 md:gap-y-2">
              <h3 className="text-xl font-bold">Contacts</h3>
              <div className="flex gap-x-5 md:gap-x-4">
                {SOCIAL_MEDIA_LIST.map((socialMedia: SocialMedia) => (
                  <motion.a
                    href={socialMedia.href}
                    target="_blank"
                    className="size-12 xxs:size-14"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                    key={socialMedia.id}>
                    {getIconComponent(socialMedia.text, false)}
                  </motion.a>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-y-4 md:gap-y-2">
              <h3 className="text-xl font-bold">Favorite Teams</h3>
              <div className="flex gap-x-3 md:gap-x-2">
                {TEAMS.map((team: Team) => (
                  <FramerImage
                    src={team.src}
                    alt={`${team.alt}`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                    key={team.id}
                    className="size-14 cursor-pointer rounded-full xxs:size-16"
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
