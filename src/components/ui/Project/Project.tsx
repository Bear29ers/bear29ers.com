'use client';

import { useState, type FC } from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { LocationIcon, OrganizationIcon } from '@/components/icons/ProfileIcons/ProfileIcons';

import type { Project as ProjectType } from '@/types/experience';

import ProjectHighlight from '../projects/ProjectHighlight/ProjectHighlight';
import ProjectTag from '../projects/ProjectTag/ProjectTag';

const bgVariants = {
  opened: {
    backgroundColor: '#2C3641',
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

interface Props {
  project: ProjectType;
}

const Project: FC<Props> = ({ project }) => {
  const t = useTranslations('experience');
  const [isShow, setIsShow] = useState<boolean>(false);
  const handleClick = () => {
    setIsShow(!isShow);
  };

  return (
    <motion.div
      className="flex w-full grow flex-col rounded-2xl p-5 md:p-8"
      variants={bgVariants}
      initial="closed"
      animate={isShow ? 'opened' : 'closed'}
      data-testid="project-container">
      <div className="flex flex-col gap-y-3">
        {/* Period */}
        <div className="flex gap-x-1.5 text-xs font-medium text-gray-400">
          <time>{project.startAt}</time>
          <span>−</span>
          <time>{project.endAt}</time>
        </div>
        {/* Role */}
        <h2 className="text-3xl font-extrabold md:text-4xl">{t(`role.${project.role}`)}</h2>
        <div className="flex flex-col gap-y-1">
          {/* Campany */}
          <div className="flex items-center gap-x-3">
            <div className="size-4">
              <OrganizationIcon />
            </div>
            <span className="text-sm font-medium md:text-base">{t(`company.${project.company}`)}</span>
          </div>
          {/* Location */}
          <div className="flex items-center gap-x-3">
            <div className="size-4">
              <LocationIcon />
            </div>
            <span className="text-sm font-medium md:text-base">{t(`location.${project.location}`)}</span>
          </div>
        </div>
        {/* ProjectTag */}
        <div className="flex flex-wrap gap-1.5">
          {project.tagList.map((tagName: string, index: number) => (
            <ProjectTag tagName={tagName} key={index} />
          ))}
        </div>
        <button
          type="button"
          className="inline w-fit rounded-xl bg-customRed-500 px-4 py-1 text-xs font-medium uppercase transition-colors duration-500 ease-in-out hover:bg-customRed-400 xs:text-sm"
          onClick={handleClick}>
          {isShow ? 'Show Less' : 'Show More'}
        </button>
      </div>
      <motion.div
        className="mx-auto flex-col gap-y-6 overflow-hidden"
        layout
        variants={variants}
        initial="closed"
        animate={isShow ? 'opened' : 'closed'}
        data-testid="project-info-more">
        <AnimatePresence>
          (isShow &&
          <div className="flex flex-col gap-y-5">
            {/* Description */}
            <div className="mt-6 flex flex-col gap-y-3 text-sm xs:text-base">
              {project.description.map((index: number) => (
                <p key={`description-${project.id}-${index}`}>
                  {t(`description.${project.company}.${project.id}.${index}`)}
                </p>
              ))}
              {}
            </div>
            <h3 className="mt-2 text-lg font-bold md:text-xl">{t('highlights')}</h3>
            {/* Higlights */}
            <div className="flex flex-col gap-y-2">
              {project.highlightList.map((index: number) => (
                <ProjectHighlight
                  id={project.id}
                  company={project.company}
                  index={index}
                  key={`highlight-${project.id}-${index}`}
                />
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
