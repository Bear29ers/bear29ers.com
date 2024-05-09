import AnimatedText from '@/components/AnimatedText/AnimatedText';
import { LocationIcon, OrganizationIcon } from '@/components/icons/ProfileIcons/ProfileIcons';

import type { NextPage } from 'next';

const Experience: NextPage = () => {
  return (
    <div className="flex-center w-full flex-col bg-dark text-white">
      <div className="my-24">
        <AnimatedText text="Experience" />
      </div>
      <div className="mx-auto min-h-screen w-full max-w-screen-lg bg-stone-700">
        <div className="flex justify-around">
          <div className="writing-mode-vertical flex items-center gap-x-6 text-4xl font-black">
            <time>2023</time>
            <span>−</span>
            <time>now</time>
          </div>
          <div className="flex w-full max-w-xl grow flex-col gap-y-4">
            <h2 className=" text-5xl font-extrabold">Frontend Developer</h2>
            <div className="flex flex-col gap-y-1">
              <div className="flex items-center gap-x-3">
                <div className="size-[18px]">
                  <OrganizationIcon />
                </div>
                <span className="font-medium">Gakken LEAP Co.,Ltd</span>
              </div>
              <div className="flex items-center gap-x-3">
                <div className="size-[18px]">
                  <LocationIcon />
                </div>
                <span className="font-medium">Tokyo, Japan</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
