import Edit from '@/components/profiles/Edit/Edit';
import Status from '@/components/profiles/Status/Status';

import type { NextPage } from 'next';

const About: NextPage = () => {
  return (
    <main className="flex-center w-full flex-col bg-iron text-dark">
      <div className="mx-auto flex w-full max-w-screen-xl pt-24 font-sans">
        <div className="col-span-3 w-full max-w-xs bg-light">
          {/* Status */}
          <Status />
        </div>
        <div className="grow rounded-lg border border-geyser bg-lime-100 p-6">
          {/* Edit */}
          <Edit />
        </div>
      </div>
    </main>
  );
};

export default About;
