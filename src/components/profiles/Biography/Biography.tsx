import type { FC } from 'react';

import { WavingHand } from '@/components/icons/ProfileIcons/ProfileIcons';

import { PROFILE_TEXT } from '@/common/constants/about';

const Biography: FC = () => {
  return (
    <div className="flex w-full max-w-5xl flex-col gap-y-6">
      <div className="flex items-end gap-x-3">
        <h4 className="text-lg font-bold sm:text-xl">{PROFILE_TEXT.shortGreeting}</h4>
        <WavingHand />
      </div>
      <h3 className="text-xl font-bold sm:text-2xl">{PROFILE_TEXT.title}</h3>
      <div className="mt-5 flex flex-col gap-y-5">
        {PROFILE_TEXT.biographyList.map((biography) => (
          <p key={biography.id} className="sm:text-lg">
            {biography.text}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Biography;
