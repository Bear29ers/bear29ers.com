import type { FC } from 'react';

import type { Tag } from '@/types/article';

interface Props {
  tags: Tag[];
}

const ArticleTag: FC<Props> = ({ tags }) => {
  const bgColorVariants = {
    coding: 'bg-customRed-500',
  };

  return (
    <div>
      {tags.map((tag: Tag) => (
        <span key={tag.slug} className="me-2 rounded-sm bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800">
          {tag.name}
        </span>
      ))}
    </div>
  );
};

export default ArticleTag;
