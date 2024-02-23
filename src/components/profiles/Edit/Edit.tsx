import type { FC } from 'react';

import { PencilIcon } from '@/components/icons/ProfileIcons/ProfileIcons';

import { PROFILE_TEXT } from '@/common/constants/about';

const Edit: FC = () => {
  return (
    <div className="mb-5 flex items-center justify-between">
      <p className="font-mono text-xs">
        {PROFILE_TEXT.userName}
        <span className="px-px text-hitGray">/</span>README<span className="text-hitGray">.md</span>
      </p>
      <div className="size-4">
        <PencilIcon />
      </div>
    </div>
  );
};

export default Edit;
