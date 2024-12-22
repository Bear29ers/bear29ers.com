import type { FC } from 'react';

import { useTranslations } from 'next-intl';

import type { Color } from '@/types/color';

interface Props {
  id: number;
  company: string;
  index: number;
  themeColor: Color;
}

const ProjectHighlight: FC<Props> = ({ id, company, index, themeColor }) => {
  const t = useTranslations('experience.highlightList');

  return (
    <span
      className={`flex w-fit cursor-default items-start gap-x-2 rounded-lg px-3 py-1.5 text-sm xs:rounded-xl md:px-4 md:py-2 md:text-base bg-custom${themeColor}-900`}>
      <span>&#127775;</span>
      <span className="font-medium">{t(`${company}.${id}.${index}`)}</span>
    </span>
  );
};

export default ProjectHighlight;
