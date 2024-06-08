'use client';

import AnimatedText from '@/components/AnimatedText/AnimatedText';
import Footer from '@/components/Footer/Footer';
import Ambition from '@/components/profiles/Ambition/Ambition';
import Biography from '@/components/profiles/Biography/Biography';
import SectionTitle from '@/components/profiles/SectionTitle/SectionTitle';
import Skills from '@/components/profiles/Skills/Skills';
import Status from '@/components/profiles/Status/Status';

import type { NextPage } from 'next';

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
      <div className="flex flex-col gap-y-28">
        <Status />
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-y-48">
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
          <div className="flex items-center">
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
