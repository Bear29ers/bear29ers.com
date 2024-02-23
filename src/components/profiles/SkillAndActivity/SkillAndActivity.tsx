import type { FC } from 'react';

import { PencilIcon, WavingHand } from '@/components/icons/ProfileIcons/ProfileIcons';

import { PROFILE_TEXT } from '@/common/constants/about';

const SkillAndActivity: FC = () => {
  return (
    <div className="rounded-md border border-geyser p-6">
      <div className="mb-5 flex items-center justify-between">
        <p className="font-mono text-xs">
          {PROFILE_TEXT.userName}
          <span className="px-px text-hitGray">/</span>README<span className="text-hitGray">.md</span>
        </p>
        <div className="size-4">
          <PencilIcon />
        </div>
      </div>
      <div className="flex flex-col gap-y-16">
        <div>
          <div className="mb-6 flex items-end gap-x-3">
            <h3 className="text-xl font-bold">{PROFILE_TEXT.shortGreeting}</h3>
            <WavingHand />
          </div>
          <h2 className="text-2xl font-bold">{PROFILE_TEXT.title}</h2>
          <hr className="mb-6 mt-2 bg-geyser" />
          <div className="flex flex-col gap-y-4">
            {PROFILE_TEXT.biographyList.map((biography) => (
              <p key={biography.id}>{biography.text}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillAndActivity;
