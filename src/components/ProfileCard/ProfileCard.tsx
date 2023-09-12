import type { FC } from 'react';

import Image from 'next/image';

import Profile from '../../../public/images/memoji.png';

const ProfileCard: FC = () => {
  return (
    <div className="flex flex-col items-end">
      <div className="trapezoid h-16 w-[70%] rounded-tr-2xl bg-green-300" />
      <div className="flex w-full flex-col items-end rounded-b-2xl rounded-tl-2xl bg-blue-300 px-4 pb-4">
        <div className="relative">
          <Image src={Profile} alt="Bear29ers" className="relative z-20 h-auto w-72" role="img" />
          <div className="absolute left-1/2 top-1/2 z-10 h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-300" />
          <div className="absolute left-1/2 top-1/2 z-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border-8 border-white" />
        </div>
        <div className="mr-auto">
          <h1>Yuta</h1>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
