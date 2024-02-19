'use client';

import { useState } from 'react';

import type { NextPage } from 'next';

const Home: NextPage = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  return (
    <main className='relative h-screen w-screen bg-iron'>
      <h1>Bear29ers</h1>
    </main>
  );
};

export default Home;
