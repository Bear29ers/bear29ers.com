import type { FC } from 'react';

interface Props {
  highlight: string;
}

const ProjectHighlight: FC<Props> = ({ highlight }) => {
  return (
    <span className="flex w-fit cursor-default items-center gap-x-2 rounded-xl bg-pink-900 px-4 py-2">
      <span>&#127775;</span>
      <span className="font-medium">{highlight}</span>
    </span>
  );
};

export default ProjectHighlight;
