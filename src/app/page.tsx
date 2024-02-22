'use client';

import { useState } from 'react';

import Bear from '@/components/Bear/Bear';
import Intro from '@/components/Intro/Intro';
import SocialIcons from '@/components/SocialIcons/SocialIcons';

import type { NextPage } from 'next';

const Home: NextPage = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  return (
    <main className='relative h-screen w-screen bg-iron overflow-hidden'>
      {/* Intro */}
      <Intro isClicked={isClicked} />
      {/* Bear */}
      <Bear isClicked={isClicked} setIsClicked={setIsClicked} />
      {/* Social Icons */}
      <SocialIcons />
    </main>
  );
};

export default Home;
