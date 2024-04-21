import type { FC } from 'react';

import { WavingHand } from '@/components/icons/ProfileIcons/ProfileIcons';

import { PROFILE_TEXT } from '@/common/constants/about';

const Biography: FC = () => {
  return (
    <div>
      <div className="mb-6 flex items-end gap-x-3">
        <h3 className="text-xl font-bold">{PROFILE_TEXT.shortGreeting}</h3>
        <WavingHand />
      </div>
      <h2 className="text-2xl font-bold">{PROFILE_TEXT.title}</h2>
      <hr className="mb-6 mt-2 bg-hitGray" />
      <div className="flex flex-col gap-y-4">
        {PROFILE_TEXT.biographyList.map((biography) => (
          <p key={biography.id}>{biography.text}</p>
        ))}
      </div>
    </div>
  );
};

export default Biography;
