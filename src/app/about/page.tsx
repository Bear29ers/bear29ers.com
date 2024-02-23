import Profile from '@/components/Profile/Profile';

import type { NextPage } from 'next';

const About: NextPage = () => {
  return (
    <main className="flex-center w-full flex-col bg-iron text-dark">
      <Profile />
    </main>
  );
};

export default About;
