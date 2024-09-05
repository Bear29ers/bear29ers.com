import { Suspense } from 'react';

import fetchMedia from '@/libs/fetchMedia';

import type { NextPage } from 'next';

export const revalidate = 3600;

const Gallery: NextPage = async () => {
  const date = new Date('2024-05-01T12:00:00Z');
  const unixtime = Math.floor(date.getTime() / 1000);
  const mediaList = await fetchMedia(unixtime);

  return (
    <div className="h-screen w-full bg-hitGray bg-noise-pattern">
      <Suspense>
        <h1>gallery server component</h1>
      </Suspense>
    </div>
  );
};

export default Gallery;
