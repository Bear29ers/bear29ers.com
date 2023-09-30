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
            <div className="flex w-full justify-between gap-x-8">
              <div className="w-4/12 bg-orange-100">
                <ProfileCard />
              </div>
              <div className="flex w-8/12 flex-col gap-y-8 bg-sky-100">
                <h2 className="bg-yellow-200 text-7xl font-extrabold">Persistence pays off</h2>
                <div className="h-60 w-9/12 rounded-2xl bg-green-200">works</div>
                <div className="w-9/12 grow rounded-2xl bg-purple-200">works</div>
              </div>
            </div>
          </HomeContentsLayout>
        </main>
      </PageLayout>
    </div>
  );
};

export default Home;
