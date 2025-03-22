import type { FC } from 'react';

import type { Tag } from '@/types/article';

interface Props {
  tags: Tag[];
}

const ArticleTag: FC<Props> = ({ tags }) => {
  const getBgColorVariants = (tag: string): string => {
    let colorVariants: string;
    switch (tag) {
      case 'frontend':
        colorVariants = 'bg-customGreen-100 text-customGreen-800';
        break;
      case 'ui-ux':
        colorVariants = 'bg-customOrange-100 text-customOrange-800';
        break;
      default:
        colorVariants = 'bg-customCyan-100 text-customCyan-800';
        break;
    }

    return colorVariants;
  };

  return (
    <div>
      {tags.map((tag: Tag) => (
        <span
          key={tag.slug}
          className={`me-2 rounded-sm px-2.5 py-0.5 text-sm font-medium ${getBgColorVariants(tag.slug)}`}>
          {tag.name}
        </span>
      ))}
    </div>
  );
};

export default ArticleTag;
