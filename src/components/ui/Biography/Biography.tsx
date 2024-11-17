import type { FC } from 'react';

import { useTranslations } from 'next-intl';

import { WavingHand } from '@/components/icons/ProfileIcons/ProfileIcons';

import { PROFILE_TEXT } from '@/constants/about';

const Biography: FC = () => {
  const t = useTranslations('about.biography');

  return (
    <div className="flex w-full max-w-5xl flex-col gap-y-6">
      <div className="flex items-end gap-x-3">
        <h4 className="text-lg font-bold sm:text-xl">{t('greeting')}</h4>
        <WavingHand />
      </div>
      <h3 className="text-xl font-bold sm:text-2xl">{t('occupation')}</h3>
      <div className="mt-5 flex flex-col gap-y-5">
        {PROFILE_TEXT.paragraphList.map((paragraph) => (
          <p key={paragraph.id} className="sm:text-lg">
            {t(`paragraph.${paragraph.text}`)}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Biography;
