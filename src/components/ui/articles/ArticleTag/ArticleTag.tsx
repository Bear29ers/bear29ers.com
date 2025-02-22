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
        <span key={tag.slug}>{tag.name}</span>
      ))}
    </div>
  );
};

export default ArticleTag;
