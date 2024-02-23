import type { FC } from 'react';

import { PencilIcon, WavingHand } from '@/components/icons/ProfileIcons/ProfileIcons';

import { PROFILE_TEXT } from '@/common/constants/about';

const SkillAndActivity: FC = () => {
  return (
    <div className="rounded-md border border-geyser p-6">
      <div className="mb-5 flex items-center justify-between">
        <p className="font-mono text-xs">
          Bear29ers<span className="px-px text-hitGray">/</span>README<span className="text-hitGray">.md</span>
        </p>
        <div className="size-4">
          <PencilIcon />
        </div>
      </div>
      <div className="flex flex-col gap-y-16">
        <div className="mb-6 flex items-end gap-x-3">
          <h3 className="text-xl font-bold">{PROFILE_TEXT.shortGreeting}</h3>
          <WavingHand />
        </div>
        <h2>{PROFILE_TEXT.title}</h2>
      </div>
    </div>
  );
};

export default SkillAndActivity;
