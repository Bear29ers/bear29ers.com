import AnimatedText from '@/components/AnimatedText/AnimatedText';
import ContentsLayout from '@/components/ContentsLayout/ContentsLayout';
import PageLayout from '@/components/PageLayout/PageLayout';

import type { NextPage } from 'next';

const About: NextPage = () => {
  return (
    <PageLayout>
      <main className="flex-center w-full flex-col" role="main">
        <ContentsLayout className="">
          <AnimatedText text="Persistence pays off!" className="mb-16" />
          <div>GitHub Profile</div>
        </ContentsLayout>
      </main>
    </PageLayout>
  );
};

export default About;
