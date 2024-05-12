'use client';

import { useState, type FC } from 'react';

import { AnimatePresence, motion } from 'framer-motion';

import { LocationIcon, OrganizationIcon } from '@/components/icons/ProfileIcons/ProfileIcons';

const bgVariants = {
  opened: {
    backgroundColor: '#75BD53',
    transition: { duration: 0.75, type: 'tween', ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    backgroundColor: '#232A36',
    transition: { duration: 0.9, type: 'tween', ease: [0.76, 0, 0.24, 1] },
  },
};

const variants = {
  opened: {
    height: 'auto',
    transition: { duration: 0.75, type: 'tween', ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    height: 0,
    transition: { duration: 0.75, type: 'tween', ease: [0.76, 0, 0.24, 1] },
  },
};

const Project: FC = () => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const handleClick = () => {
    setIsShow(!isShow);
  };

  return (
    <motion.div
      className="flex w-full max-w-3xl grow flex-col rounded-2xl px-8"
      variants={bgVariants}
      initial="closed"
      animate={isShow ? 'opened' : 'closed'}>
      <div className="mx-auto flex max-w-xl flex-col gap-y-3 pt-8">
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
        {/* TODO: コンポーネント化 */}
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
          className="inline w-fit rounded-xl bg-pink-500 px-4 py-1 text-sm font-medium uppercase"
          onClick={handleClick}>
          Show More
        </button>
      </div>
      {/* TODO: コンポーネント化 */}
      <motion.div
        className="mx-auto max-w-xl flex-col gap-y-6 overflow-hidden"
        layout
        variants={variants}
        initial="closed"
        animate={isShow ? 'opened' : 'closed'}>
        <AnimatePresence>
          (isShow &&
          <div className="mb-8 flex flex-col gap-y-5">
            <p className="mt-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam doloribus cum ipsam? Laborum
              voluptatem est debitis dignissimos autem necessitatibus, expedita distinctio possimus deserunt eum dolore
              rem explicabo, dolores ea voluptates tenetur impedit ipsam exercitationem voluptas molestias veritatis.
              Doloribus tempora ad laboriosam magnam eaque fugit rem ab! Dicta ab in voluptatibus consequuntur ullam,
              eum deleniti voluptates, qui exercitationem sit quo quam voluptatum blanditiis, beatae ipsum voluptatem
              voluptas maiores natus facilis consequatur?
            </p>
            <h3 className="mt-2 text-xl font-bold">Some Highlights</h3>
            {/* TODO: コンポーネント化 */}
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
          )
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default Project;
