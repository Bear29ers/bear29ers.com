import type { FC } from 'react';

import { useTranslations } from 'next-intl';

import { AMBITIONS } from '@/constants/about';

import type { Ambition as AmbitionType } from '@/types/about';

const Ambition: FC = () => {
  const t = useTranslations('about.ambitions');

  return (
    <ul className="space-y-3">
      {AMBITIONS.map((ambition: AmbitionType) => (
        <li key={ambition.id} className="xxs:text-lg sm:text-xl">
          {t(ambition.text)}
        </li>
      ))}
    </ul>
  );
};

export default Ambition;
