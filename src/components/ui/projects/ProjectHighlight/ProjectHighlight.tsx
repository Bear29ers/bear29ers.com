import type { FC } from 'react';

import { useTranslations } from 'next-intl';

interface Props {
  id: number;
  company: string;
  index: number;
}

const ProjectHighlight: FC<Props> = ({ id, company, index }) => {
  const t = useTranslations('experience.highlightList');

  return (
    <span className="flex w-fit cursor-default items-start gap-x-2 rounded-lg bg-customRed-900 px-3 py-1.5 text-sm xs:rounded-xl md:px-4 md:py-2 md:text-base">
      <span>&#127775;</span>
      <span className="font-medium">{t(`${company}.${id}.${index}`)}</span>
    </span>
  );
};

export default ProjectHighlight;
