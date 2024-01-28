'use client';

import { useState } from 'react';

// import PixelBackground from '@/components/PixelBackground/PixelBackground';
import MenuIcon from '@/components/MenuIcon/MenuIcon';
import Profile from '@/components/Profile/Profile';
import AnimatedText from '@/components/commons/AnimatedText/AnimatedText';
import ContentsLayout from '@/components/layouts/ContentsLayout/ContentsLayout';

import PageTransitionEffect from '../PageTransitionEffect';

import type { NextPage } from 'next';

const About: NextPage = () => {
  const [menuIsActive, setMenuIsActive] = useState<boolean>(false);

  return (
    <PageTransitionEffect href="about">
      <div className="fixed right-8 top-3">
        <MenuIcon menuIsActive={menuIsActive} setMenuIsActive={setMenuIsActive} />
      </div>
      {/* <PixelBackground menuIsActive={menuIsActive} /> */}
      <main className="flex-center w-full flex-col bg-light text-dark" role="main">
        <ContentsLayout className="mt-40">
          <AnimatedText text="Persistence pays off!" className="mb-16" />
          <Profile />
        </ContentsLayout>
      </main>
    </PageTransitionEffect>
  );
};

export default About;
