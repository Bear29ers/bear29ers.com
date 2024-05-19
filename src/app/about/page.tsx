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
