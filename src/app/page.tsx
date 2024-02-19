'use client';

import { useState } from 'react';

import Intro from '@/components/Intro/Intro';

import type { NextPage } from 'next';

const Home: NextPage = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  return (
    <main className='relative h-screen w-screen bg-iron'>
      <button type='button' onClick={() => setIsClicked((prevState) => !prevState)}>
        isClicked
      </button>
      {/* Intro */}
      <Intro isClicked={isClicked} />
      <h1>Bear29ers</h1>
    </main>
  );
};

export default Home;
