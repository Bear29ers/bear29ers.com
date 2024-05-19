import AnimatedText from '@/components/AnimatedText/AnimatedText';
import Project from '@/components/Project/Project';

import { EXPERIENCE_INFO } from '@/common/constants/experience';
import type { Project as ProjectType } from '@/common/types/experience';
import { Experience } from '@/common/types/experience';

import type { NextPage } from 'next';

const Experience: NextPage = () => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center bg-dark pb-24 text-white">
      <div className="my-24">
        <AnimatedText text="Experience" />
      </div>
      <div className="mx-auto w-full max-w-screen-lg">
        {EXPERIENCE_INFO.map((experience: Experience) => (
          <div className="flex items-center justify-between" key={experience.id}>
            <div className="writing-mode-vertical flex items-center gap-x-6 pl-12 text-4xl font-black">
              <time>{experience.startAt}</time>
              <span>−</span>
              <time>{experience.endAt}</time>
            </div>
            <div className="flex flex-col gap-y-12">
              {experience.projects.map((project: ProjectType) => (
                <Project project={project} key={project.id} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
