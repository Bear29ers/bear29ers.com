import AnimatedText from '@/components/AnimatedText/AnimatedText';
import Footer from '@/components/Footer/Footer';
import Project from '@/components/Project/Project';
import Period from '@/components/projects/Period/Period';

import { EXPERIENCE_INFO } from '@/common/constants/experience';
import type { Project as ProjectType } from '@/common/types/experience';
import { Experience } from '@/common/types/experience';

import type { NextPage } from 'next';

const Experience: NextPage = () => {
  return (
    <div className="flex w-full flex-col items-center bg-dark px-2.5 text-white xs:px-5 lg:px-0">
      <div className="my-24">
        <AnimatedText text="Experience" />
      </div>
      <div className="mx-auto flex w-full flex-col gap-y-48 lg:max-w-screen-lg">
        {EXPERIENCE_INFO.map((experience: Experience) => (
          <div className="flex items-center justify-between md:justify-evenly lg:justify-between" key={experience.id}>
            <div className="writing-mode-vertical rotate-180 text-3xl font-black text-hitGray md:text-4xl">
              <Period startAt={experience.startAt} endAt={experience.endAt} />
            </div>
            <div className="flex max-w-md flex-col gap-y-12 md:max-w-xl lg:max-w-3xl">
              {experience.projects.map((project: ProjectType) => (
                <Project project={project} key={project.id} />
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Experience;
