import type { FC } from 'react';

import { AMBITIONS } from '@/common/constants/about';
import type { Ambition as AmbitionType } from '@/common/types/about';

const Ambition: FC = () => {
  return (
    <ul className="space-y-3">
      {AMBITIONS.map((ambition: AmbitionType) => (
        <li key={ambition.id} className="ssm:text-lg sm:text-xl">
          {ambition.text}
        </li>
      ))}
    </ul>
  );
};

export default Ambition;
