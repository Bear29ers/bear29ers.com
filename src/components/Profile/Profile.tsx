import type { FC } from 'react';

import Biography from '@/components/profiles/Biography/Biography';

const Profile: FC = () => {
  return (
    <div className="mx-auto flex w-full max-w-screen-xl  pt-24 font-sans text-dark" role="presentation">
      <div className="col-span-3 w-full max-w-xs bg-light">
        {/* Biography */}
        <Biography />
      </div>
      <div className="col-span-6 w-full bg-lime-300" />
    </div>
  );
};

export default Profile;
