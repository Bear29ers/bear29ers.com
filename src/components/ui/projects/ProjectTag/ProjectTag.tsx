import type { FC } from 'react';

import getCustomColorClass from '@/utils/getCustomColorClass';

import type { Color } from '@/types/color';

interface Props {
  tagName: string;
  themeColor: Color;
}

const ProjectTag: FC<Props> = ({ tagName, themeColor }) => {
  const customBgColorClass = getCustomColorClass('bg', themeColor, 200);

  return (
    <span
      className={`cursor-default rounded-md px-1.5 py-0.5 text-xs font-semibold text-dark md:text-sm ${customBgColorClass}`}>
      {tagName}
    </span>
  );
};

export default ProjectTag;
