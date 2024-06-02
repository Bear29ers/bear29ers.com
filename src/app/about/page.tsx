'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import AnimatedText from '@/components/AnimatedText/AnimatedText';
import Footer from '@/components/Footer/Footer';
import Biography from '@/components/profiles/Biography/Biography';
import Contact from '@/components/profiles/Contact/Contact';
import Contributions from '@/components/profiles/Contributions/Contributions';
import Edit from '@/components/profiles/Edit/Edit';
import Resolution from '@/components/profiles/Resolution/Resolution';
import Skills from '@/components/profiles/Skills/Skills';
import Stats from '@/components/profiles/Stats/Stats';

import { PROFILE_DETAILS, PROFILE_TEXT, TEAMS } from '@/common/constants/about';
import type { ProfileDetail, Team } from '@/common/types/about';
import { damion } from '@/common/utils/fonts';

import type { NextPage } from 'next';

import ProfileIcon from '~/images/profile.png';

const FramerImage = motion(Image);

const About: NextPage = () => {
  return (
    <div className="flex-center w-full flex-col bg-dark text-white">
      <div className="my-24 flex gap-x-5">
        <div>
          <AnimatedText text="About" />
        </div>
        <div>
          <AnimatedText text="me" />
        </div>
      </div>
      {/* new */}
      <div className="flex flex-col gap-y-28">
        <div className="flex h-[360px] items-center">
          <div className="flex-center relative -mr-32 size-[360px] rounded-full bg-darkGray">
            <div className="flex-center size-80 rounded-full bg-darker">
              <Image src={ProfileIcon} alt={PROFILE_TEXT.userName} className="w-52" />
            </div>
            {/* TODO: ホバーアニメーション入れたい */}
            <span className="absolute left-32 top-12 size-3 rounded-full bg-mantis" />
            <span className="absolute left-6 top-16 size-9 rotate-[60deg] rounded-lg bg-maximumBlue" />
            <span className="absolute bottom-36 left-4 size-4 rounded-full bg-mediumSlateBlue" />
            <span className="absolute right-0 top-9 size-12 rotate-[30deg] rounded-lg bg-mediumSlateBlue" />
            <span className="absolute bottom-28 right-16 size-2.5 rounded-full bg-maximumBlue" />
            <span className="absolute bottom-6 right-24 size-6 rotate-[15deg] rounded-lg bg-mantis" />
          </div>
          <div>
            <div className="flex gap-x-10 rounded-3xl bg-darkGray py-10 pl-48 pr-16">
              <div className="flex flex-col gap-y-8">
                <div>
                  <h2 className="text-2xl font-bold">Yuta Okuma</h2>
                  <h4 className="text-xl text-lightGray">Bear29ers</h4>
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
              <div className="flex flex-col">
                <h3 className="mb-10 text-xl font-bold">My Favorite Teams</h3>
                <div className="flex gap-1">
                  {TEAMS.map((team: Team) => (
                    <FramerImage
                      src={team.src}
                      alt={`${team.alt}`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                      key={team.id}
                      className="size-[70px] cursor-pointer rounded-full"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          {/* section title */}
          <div className="relative w-fit -rotate-12">
            <h2 className={`${damion.variable} font-damion text-[200px] text-darkerGray`}>Biography</h2>
            <h4
              className={`${damion.variable} absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-damion text-8xl text-hitGray`}>
              Biography
            </h4>
          </div>
          <p>biography</p>
        </div>
      </div>
      {/* old */}
      <div className="mx-auto mt-24 flex w-full max-w-screen-xl font-sans">
        {/* <div className="w-full max-w-xs"> */}
        {/* Status */}
        {/* <Status /> */}
        {/* </div> */}
        <div className="grow rounded-lg border border-hitGray p-6">
          {/* Edit */}
          <Edit />
          <div className="flex flex-col gap-y-16">
            {/* Biography */}
            <Biography />
            {/* Resolution */}
            <Resolution />
            {/* Contact */}
            <Contact />
            {/* Skills */}
            <Skills />
            {/* Stats */}
            <Stats />
            {/* Contributions */}
            <Contributions />
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;
