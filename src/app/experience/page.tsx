import AnimatedText from '@/components/AnimatedText/AnimatedText';
import Project from '@/components/Project/Project';

import type { NextPage } from 'next';

const Experience: NextPage = () => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center bg-dark text-white">
      <div className="my-24">
        <AnimatedText text="Experience" />
      </div>
      <div className="mx-auto w-full max-w-screen-lg">
        <div className="flex items-center justify-between">
          <div className="writing-mode-vertical flex items-center gap-x-6 pl-12 text-4xl font-black">
            <time>2023</time>
            <span>−</span>
            <time>now</time>
          </div>
          <Project />
        </div>
      </div>
    </div>
  );
};

export default Experience;
