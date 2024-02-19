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
      <div className='absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2'>{isClicked && <Intro />}</div>
      {/* Dark background */}
      <div
        className={`intro-transition-bg absolute inset-y-0 right-1/2 bg-dark ${isClicked ? 'h-full w-1/2' : 'h-0 w-2'}`}
      />
      <h1>Bear29ers</h1>
    </main>
  );
};

export default Home;
