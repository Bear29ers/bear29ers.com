'use client';

import { useState } from 'react';

import Bear from '@/components/ui/Bear/Bear';
import Intro from '@/components/ui/Intro/Intro';
import PageNavigation from '@/components/ui/PageNavigation/PageNavigation';
import SocialIcons from '@/components/ui/SocialIcons/SocialIcons';

import { HOME_PROFILE_TEXT } from '@/constants/home';

import type { NextPage } from 'next';

const Home: NextPage = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* Intro */}
      <Intro isClicked={isClicked} homeProfileText={HOME_PROFILE_TEXT} />
      {/* Bear */}
      <Bear isClicked={isClicked} setIsClicked={setIsClicked} />
      {/* Page Navigation */}
      <PageNavigation isClicked={isClicked} />
      {/* Social Icons */}
      <SocialIcons lightMode={isClicked} />
    </div>
  );
};

export default Home;
