import type { FC } from 'react';

import Image from 'next/image';

import { Author } from '@/types/article';

import DefaultProfile from '~/images/default_profile.jpg';

interface Props {
  author: Author;
}

const ArticleProfile: FC<Props> = ({ author }) => {
  return (
    <div className="flex items-center gap-x-3">
      <Image
        src={author.profileImage?.src || DefaultProfile}
        alt="Profile image"
        className="size-12 rounded-full border-3 border-hitGray"
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
