import type { FC } from 'react';

interface Props {
  highlight: string;
}

const ProjectHighlight: FC<Props> = ({ highlight }) => {
  return (
    <span className="flex w-fit cursor-default items-start gap-x-2 rounded-lg bg-customRed-900 px-3 py-1.5 text-sm xs:rounded-xl md:px-4 md:py-2 md:text-base">
      <span>&#127775;</span>
      <span className="font-medium">{highlight}</span>
    </span>
  );
};

export default ProjectHighlight;
