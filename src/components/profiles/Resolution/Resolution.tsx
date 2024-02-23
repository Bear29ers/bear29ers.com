import type { FC } from 'react';

import { RESOLUTIONS } from '@/common/constants/about';

const Resolution: FC = () => {
  return (
    <div>
      <h3 className="mb-4 text-xl font-bold">🏁 My Resolution</h3>
      <ul className="list-inside list-disc space-y-1">
        {RESOLUTIONS.map((resolution) => (
          <li key={resolution.id}>{resolution.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default Resolution;
