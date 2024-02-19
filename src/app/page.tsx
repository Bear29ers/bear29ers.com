'use client';

import { useState } from 'react';

import Bear from '@/components/Bear/Bear';
import Intro from '@/components/Intro/Intro';

import type { NextPage } from 'next';

const Home: NextPage = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  return (
    <main className='relative h-screen w-screen bg-iron'>
      {/* Intro */}
      <Intro isClicked={isClicked} />
      {/* Bear */}
      <div className='size-full flex-center'>
        <Bear />
      </div>
    </main>
  );
};

export default Home;
