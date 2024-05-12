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
        <div className="flex items-center justify-around">
          <div className="writing-mode-vertical flex items-center gap-x-6 text-4xl font-black">
            <time>2023</time>
            <span>−</span>
            <time>now</time>
          </div>
          <div className="flex w-full max-w-lg grow flex-col gap-y-3.5 bg-blue-900">
            <div className="flex gap-x-1.5 text-xs font-medium">
              <time>2023</time>
              <span>−</span>
              <time>now</time>
            </div>
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
            <div className="flex flex-wrap gap-1.5 text-sm font-semibold text-dark">
              <span className="rounded-md bg-pink-200 px-1.5 py-0.5">HTML</span>
              <span className="rounded-md bg-pink-200 px-1.5 py-0.5">(S)CSS</span>
              <span className="rounded-md bg-pink-200 px-1.5 py-0.5">Tailwind</span>
              <span className="rounded-md bg-pink-200 px-1.5 py-0.5">JavaScript</span>
              <span className="rounded-md bg-pink-200 px-1.5 py-0.5">TypeScript</span>
              <span className="rounded-md bg-pink-200 px-1.5 py-0.5">React</span>
              <span className="rounded-md bg-pink-200 px-1.5 py-0.5">NextJS</span>
              <span className="rounded-md bg-pink-200 px-1.5 py-0.5">UI</span>
              <span className="rounded-md bg-pink-200 px-1.5 py-0.5">UX</span>
            </div>
            <button
              type="button"
              className="inline w-fit rounded-xl bg-pink-500 px-4 py-1 text-sm font-medium uppercase">
              Show More
            </button>
            <div className="mt-4 flex flex-col gap-y-6">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam doloribus cum ipsam? Laborum
                voluptatem est debitis dignissimos autem necessitatibus, expedita distinctio possimus deserunt eum
                dolore rem explicabo, dolores ea voluptates tenetur impedit ipsam exercitationem voluptas molestias
                veritatis. Doloribus tempora ad laboriosam magnam eaque fugit rem ab! Dicta ab in voluptatibus
                consequuntur ullam, eum deleniti voluptates, qui exercitationem sit quo quam voluptatum blanditiis,
                beatae ipsum voluptatem voluptas maiores natus facilis consequatur?
              </p>
              <div className="flex flex-col gap-y-5">
                <h3 className="text-xl font-bold">Some Highlights</h3>
                <div className="flex flex-col gap-y-2">
                  <span className="flex w-fit items-center gap-x-2 rounded-xl bg-amber-950 px-4 py-2">
                    <span>&#127775;</span>
                    <span className="font-medium">tennant-theming for an existing component library</span>
                  </span>
                  <span className="flex w-fit items-center gap-x-2 rounded-xl bg-amber-950 px-4 py-2">
                    <span>&#127775;</span>
                    <span className="font-medium">Introduced Designed Tokens</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
