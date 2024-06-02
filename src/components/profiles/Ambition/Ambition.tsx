import type { FC } from 'react';

import { AMBITIONS } from '@/common/constants/about';
import { Ambition } from '@/common/types/about';

const Ambition: FC = () => {
  return (
    <ul className="list-inside list-disc space-y-3">
      {AMBITIONS.map((ambition: Ambition) => (
        <li key={ambition.id} className="text-xl">
          {ambition.text}
        </li>
      ))}
    </ul>
  );
};

export default Ambition;
