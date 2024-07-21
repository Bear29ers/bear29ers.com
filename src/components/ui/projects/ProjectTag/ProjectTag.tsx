import type { FC } from 'react';

interface Props {
  tagName: string;
}

const ProjectTag: FC<Props> = ({ tagName }) => {
  return (
    <span className="cursor-default rounded-md bg-customRed-200 px-1.5 py-0.5 text-xs font-semibold text-dark md:text-sm">
      {tagName}
    </span>
  );
};

export default ProjectTag;
