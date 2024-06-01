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
import Status from '@/components/profiles/Status/Status';

import { PROFILE_TEXT } from '@/common/constants/about';

import type { NextPage } from 'next';

import ProfileIcon from '~/images/profile.png';

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
      <div className="flex flex-col">
        <div className="flex-center relative size-[345px] rounded-full bg-darkGray">
          <div className="flex-center size-80 rounded-full bg-darker">
            <Image src={ProfileIcon} alt={PROFILE_TEXT.userName} className="w-52" />
          </div>
          <span className="absolute left-32 top-12 size-3 rounded-full bg-mantis" />
          <span className="absolute left-6 top-16 size-9 rotate-[60deg] rounded-lg bg-maximumBlue" />
          <span className="absolute bottom-36 left-4 size-4 rounded-full bg-mediumSlateBlue" />
          <span className="absolute right-0 top-9 size-12 rotate-[30deg] rounded-lg bg-mediumSlateBlue" />
          <span className="absolute bottom-28 right-16 size-2.5 rounded-full bg-maximumBlue" />
          <span className="absolute bottom-6 right-24 size-6 rotate-[15deg] rounded-lg bg-mantis" />
        </div>
      </div>
      {/* old */}
      <div className="mx-auto flex w-full max-w-screen-xl font-sans">
        <div className="w-full max-w-xs">
          {/* Status */}
          <Status />
        </div>
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
