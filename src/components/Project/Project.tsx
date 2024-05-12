'use client';

import { useState, type FC } from 'react';

import { AnimatePresence, motion } from 'framer-motion';

import { LocationIcon, OrganizationIcon } from '@/components/icons/ProfileIcons/ProfileIcons';

import ProjectHighlight from '../projects/ProjectHighlight/ProjectHighlight';
import ProjectTag from '../projects/ProjectTag/ProjectTag';

const bgVariants = {
  opened: {
    backgroundColor: '#29313D',
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

// TODO: データ化
const tagNameList = ['HTML', '(S)CSS', 'Tailwind', 'JavaScript', 'TypeScript', 'React', 'NextJS', 'Figma', 'UI', 'UX'];
const highlightList = ['tennant-theming for an existing component library', 'Introduced Designed Tokens'];

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
        {/* Period */}
        <div className="flex gap-x-1.5 text-xs font-medium text-gray-400">
          <time>2023</time>
          <span>−</span>
          <time>now</time>
        </div>
        <h2 className=" text-5xl font-extrabold">Frontend Developer</h2>
        <div className="flex flex-col gap-y-1">
          {/* Campany */}
          <div className="flex items-center gap-x-3">
            <div className="size-[18px]">
              <OrganizationIcon />
            </div>
            <span className="font-medium">Gakken LEAP Co.,Ltd</span>
          </div>
          {/* Location */}
          <div className="flex items-center gap-x-3">
            <div className="size-[18px]">
              <LocationIcon />
            </div>
            <span className="font-medium">Tokyo, Japan</span>
          </div>
        </div>
        {/* ProjectTag */}
        <div className="flex flex-wrap gap-1.5">
          {tagNameList.map((tagName: string, index: number) => (
            <ProjectTag tagName={tagName} key={index} />
          ))}
        </div>
        <button
          type="button"
          className="inline w-fit rounded-xl bg-pink-500 px-4 py-1 text-sm font-medium uppercase"
          onClick={handleClick}>
          Show More
        </button>
      </div>
      <motion.div
        className="mx-auto max-w-xl flex-col gap-y-6 overflow-hidden"
        layout
        variants={variants}
        initial="closed"
        animate={isShow ? 'opened' : 'closed'}>
        <AnimatePresence>
          (isShow &&
          <div className="mb-8 flex flex-col gap-y-5">
            {/* ProjectDescription */}
            <p className="mt-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam doloribus cum ipsam? Laborum
              voluptatem est debitis dignissimos autem necessitatibus, expedita distinctio possimus deserunt eum dolore
              rem explicabo, dolores ea voluptates tenetur impedit ipsam exercitationem voluptas molestias veritatis.
              Doloribus tempora ad laboriosam magnam eaque fugit rem ab! Dicta ab in voluptatibus consequuntur ullam,
              eum deleniti voluptates, qui exercitationem sit quo quam voluptatum blanditiis, beatae ipsum voluptatem
              voluptas maiores natus facilis consequatur?
            </p>
            <h3 className="mt-2 text-xl font-bold">Some Highlights</h3>
            {/* ProjectHiglight */}
            <div className="flex flex-col gap-y-2">
              {highlightList.map((highlight: string, index: number) => (
                <ProjectHighlight highlight={highlight} key={index} />
              ))}
            </div>
          </div>
          )
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default Project;
