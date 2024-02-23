import type { FC } from 'react';

import Biography from '@/components/profiles/Biography/Biography';

import SkillAndActivity from '../profiles/SkillAndActivity/SkillAndActivity';

const Profile: FC = () => {
  return (
    <div className="mx-auto flex w-full max-w-screen-xl  pt-24 font-sans text-dark" role="presentation">
      <div className="col-span-3 w-full max-w-xs bg-light">
        {/* Biography */}
        <Biography />
      </div>
      <div className="grow bg-lime-300">
        {/* Skill and Activity */}
        <SkillAndActivity />
      </div>
    </div>
  );
};

export default Profile;
