import type { FC } from 'react';

interface Props {
  tagName: string;
}

const ProjectTag: FC<Props> = ({ tagName }) => {
  return (
    <span className="cursor-default rounded-md bg-pink-200 px-1.5 py-0.5 text-sm font-semibold text-dark">
      {tagName}
    </span>
  );
};

export default ProjectTag;
