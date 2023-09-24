import type { FC } from 'react';

import Image from 'next/image';
import { FiMail } from 'react-icons/fi';

import Profile from '../../../public/images/memoji.png';

const ProfileCard: FC = () => {
  return (
    <div className="flex flex-col items-end">
      <div className="trapezoid h-12 w-[70%] rounded-tr-2xl bg-green-300" />
      <div className="flex w-full flex-col items-end rounded-b-2xl rounded-tl-2xl bg-blue-300 px-4 pb-4">
        <div className="relative">
          <Image src={Profile} alt="Bear29ers" className="relative z-20 h-auto w-72" role="img" />
          <div className="absolute left-1/2 top-1/2 z-10 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-300" />
          <div className="absolute left-1/2 top-1/2 z-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border-[7px] border-white" />
        </div>
        <div className="-mt-4 mr-auto">
          <div>
            <h1 className="text-6xl font-extralight text-white">I&apos;m,</h1>
            <h1 className="text-6xl font-semibold text-white">Yuta</h1>
            <h1 className="text-6xl font-semibold text-white">Okuma</h1>
            <a
              href="mailto:y.earl27.bear@yahoo.ne.jp"
              className="flex-center mt-5 cursor-pointer gap-x-2 border-b border-dashed pb-1.5 text-white">
              <span>y.earl27.bear@yahoo.ne.jp</span>
              <FiMail className="w-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
