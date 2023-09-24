import ProfileCard from '@/components/ProfileCard/ProfileCard';
import HomeContentsLayout from '@/components/layouts/HomeContentsLayout/HomeContentsLayout';
import PageLayout from '@/components/layouts/PageLayout/PageLayout';

// import { HOME_TEXT } from '@/constants/home';

import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className="bg-gray">
      <PageLayout isNotHome={false}>
        <main className="flex min-h-screen w-full items-center" role="main">
          <HomeContentsLayout>
            <div className="flex w-full items-start justify-between gap-x-8">
              <div className="w-4/12">
                <ProfileCard />
              </div>
              <div className="flex h-full w-8/12 flex-col">
                <h2 className="text-6xl font-extrabold">Persistence pays off</h2>
              </div>
            </div>
          </HomeContentsLayout>
        </main>
      </PageLayout>
    </div>
  );
};

export default Home;
