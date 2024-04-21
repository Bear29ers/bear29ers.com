'use client';

import { useState } from 'react';

import Bear from '@/components/Bear/Bear';
import Intro from '@/components/Intro/Intro';
import PageNavigation from '@/components/PageNavigation/PageNavigation';
import SocialIcons from '@/components/SocialIcons/SocialIcons';

import type { NextPage } from 'next';

const Home: NextPage = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-dark">
      {/* Intro */}
      <Intro isClicked={isClicked} />
      {/* Bear */}
      <Bear isClicked={isClicked} setIsClicked={setIsClicked} />
      {/* Social Icons */}
      <SocialIcons lightMode={isClicked} />
      {/* Page Navigation */}
      <PageNavigation isClicked={isClicked} />
    </div>
  );
};

export default Home;
