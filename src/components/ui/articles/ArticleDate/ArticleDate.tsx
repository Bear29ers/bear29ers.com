import type { FC } from 'react';

import { ArrowPathIcon, PencilSquareIcon } from '@heroicons/react/24/outline';

interface Props {
  createdAt: string;
  updatedAt: string;
}

const ArticleDate: FC<Props> = ({ createdAt, updatedAt }) => {
  return (
    <div className="flex items-center gap-x-4">
      <div className="flex items-center gap-x-0.5 text-sm text-hitGray">
        <PencilSquareIcon className="size-4" />
        {createdAt}
      </div>
      <div className="flex items-center gap-x-0.5 text-sm text-hitGray">
        <ArrowPathIcon className="size-4" />
        {updatedAt}
      </div>
    </div>
  );
};

export default ArticleDate;
