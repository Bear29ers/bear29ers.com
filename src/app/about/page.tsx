import Profile from '@/components/Profile/Profile';
import AnimatedText from '@/components/commons/AnimatedText/AnimatedText';
import ContentsLayout from '@/components/layouts/ContentsLayout/ContentsLayout';

import PageTransitionEffect from '../PageTransitionEffect';

import type { NextPage } from 'next';

const About: NextPage = () => {
  return (
    <PageTransitionEffect>
      <main className="flex-center w-full flex-col bg-light" role="main">
        <ContentsLayout className="mt-40">
          <AnimatedText text="Persistence pays off!" className="mb-16" />
          <Profile />
        </ContentsLayout>
      </main>
    </PageTransitionEffect>
  );
};

export default About;
