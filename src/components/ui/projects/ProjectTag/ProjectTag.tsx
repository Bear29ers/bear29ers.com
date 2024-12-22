import type { FC } from 'react';

import type { Color } from '@/types/color';

interface Props {
  tagName: string;
  themeColor: Color;
}

const ProjectTag: FC<Props> = ({ tagName, themeColor }) => {
  return (
    <span
      className={`cursor-default rounded-md px-1.5 py-0.5 text-xs font-semibold text-dark md:text-sm bg-custom${themeColor}-200`}>
      {tagName}
    </span>
  );
};

export default ProjectTag;
