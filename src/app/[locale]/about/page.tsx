'use client';

import { useRef } from 'react';

import AnimatedText from '@/components/common/AnimatedText/AnimatedText';
import SectionTitle from '@/components/common/SectionTitle/SectionTitle';
import Footer from '@/components/layout/Footer/Footer';
import Ambition from '@/components/ui/Ambition/Ambition';
import Biography from '@/components/ui/Biography/Biography';
import Skills from '@/components/ui/Skills/Skills';
import Status from '@/components/ui/Status/Status';

import type { NextPage } from 'next';

const About: NextPage = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  return (
    <div ref={ref} className="w-full flex-col text-white flex-center">
      <div className="my-24 flex gap-x-5">
        <div>
          <AnimatedText text="About" classes="text-[48px] xs:text-[60px] xsm:text-[80px]" />
        </div>
        <div>
          <AnimatedText text="me" classes="text-[48px] xs:text-[60px] xsm:text-[80px]" />
        </div>
      </div>
      <div className="flex w-full max-w-screen-lg flex-col gap-y-20 px-2.5 xs:gap-y-28 xs:px-5 xl:max-w-none xl:px-0">
        <div className="w-full">
          {/* Status */}
          <Status />
        </div>
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-y-20 xs:gap-y-28 sm:gap-y-36 md:gap-y-48">
          {/* Biography */}
          <div className="flex flex-col items-center gap-y-16">
            <div className="-rotate-12">
              <SectionTitle title="Biography" />
            </div>
            <Biography />
          </div>
          {/* Skills */}
          <div className="flex flex-col items-center gap-y-16">
            <div className="-rotate-12">
              <SectionTitle title="Skills" />
            </div>
            <Skills />
          </div>
          {/* Ambition */}
          <div className="flex flex-col items-center gap-y-16 xl:flex-row">
            <div className="-rotate-12">
              <SectionTitle title="Ambition" />
            </div>
            <div className="z-10">
              <Ambition />
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;
