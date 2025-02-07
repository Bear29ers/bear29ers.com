import AnimatedText from '@/components/common/AnimatedText/AnimatedText';
import Footer from '@/components/layout/Footer/Footer';
import Project from '@/components/ui/Project/Project';
import Period from '@/components/ui/projects/Period/Period';

import { EXPERIENCE_INFO } from '@/constants/experience';

import type { NextPage } from 'next';

const Experience: NextPage = () => {
  return (
    <div className="flex w-full flex-col items-center px-2.5 text-white xs:px-5 lg:px-0">
      <div className="my-24">
        <AnimatedText text="Experience" classes="text-[48px] xs:text-[60px] xsm:text-[80px]" />
      </div>
      <div className="mx-auto flex w-full flex-col gap-y-48 lg:max-w-screen-lg">
        {EXPERIENCE_INFO.map((experience) => (
          <div
            className="flex flex-col items-center justify-between gap-y-8 xsm:flex-row md:justify-evenly lg:justify-between"
            key={experience.id}>
            <div className="text-3xl font-black text-hitGray xsm:rotate-180 xsm:writing-mode-vertical md:text-4xl">
              <Period startAt={experience.startAt} endAt={experience.endAt} />
            </div>
            <div className="flex flex-col gap-y-12 xsm:max-w-md md:max-w-xl lg:max-w-3xl">
              {experience.projects.map((project) => (
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
