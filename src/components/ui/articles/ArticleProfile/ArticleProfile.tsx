import type { FC } from 'react';

import Image from 'next/image';

import type { Author } from '@/types/article';
import type { Color } from '@/types/color';

import DefaultProfile from '~/images/default_profile.jpg';

interface Props {
  author: Author;
  themeColor: Color;
}

const ArticleProfile: FC<Props> = ({ author, themeColor }) => {
  const borderColorVariants = {
    Red: 'border-customRed-500',
    Orange: 'border-customOrange-500',
    Green: 'border-customGreen-500',
    Cyan: 'border-customCyan-500',
    Violet: 'border-customViolet-500',
  };

  return (
    <div className="flex items-center gap-x-3">
      <Image
        src={author.profileImage?.src || DefaultProfile}
        alt="Profile image"
        className={`size-12 rounded-full border-3 ${borderColorVariants[themeColor]}`}
      />
      <div className="flex w-full items-center justify-between">
        <div className="flex flex-col items-start justify-center gap-y-1">
          <span className="text-xs leading-none text-hitGray">Author</span>
          <h3 className="font-medium leading-none">{author.fullName}</h3>
        </div>
      </div>
    </div>
  );
};

export default ArticleProfile;
