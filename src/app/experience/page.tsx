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
    <div className="flex w-full flex-col items-center bg-dark text-white">
      <div className="my-24">
        <AnimatedText text="Experience" />
      </div>
      <div className="mx-auto flex w-full max-w-screen-lg flex-col gap-y-48">
        {EXPERIENCE_INFO.map((experience: Experience) => (
          <div className="flex items-center justify-between" key={experience.id}>
            <div className="writing-mode-vertical rotate-180 text-4xl font-black text-hitGray">
              <Period startAt={experience.startAt} endAt={experience.endAt} />
            </div>
            <div className="flex max-w-3xl flex-col gap-y-12">
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
