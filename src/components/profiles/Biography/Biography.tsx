import type { FC } from 'react';

import { WavingHand } from '@/components/icons/ProfileIcons/ProfileIcons';

import { PROFILE_TEXT } from '@/common/constants/about';

import SectionTitle from '../SectionTitle/SectionTitle';

const Biography: FC = () => {
  return (
    <div className="flex flex-col items-center gap-y-16">
      {/* section title */}
      <div className="-rotate-12">
        <SectionTitle title="Biography" />
      </div>
      <div className="flex w-full max-w-5xl flex-col gap-y-6">
        <div className="flex items-end gap-x-3">
          <h4 className="text-xl font-bold">{PROFILE_TEXT.shortGreeting}</h4>
          <WavingHand />
        </div>
        <h3 className="text-2xl font-bold">{PROFILE_TEXT.title}</h3>
        <div className="mt-5 flex flex-col gap-y-5">
          {PROFILE_TEXT.biographyList.map((biography) => (
            <p key={biography.id} className="text-lg">
              {biography.text}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Biography;
