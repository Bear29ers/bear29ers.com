import ProfileCard from '@/components/ProfileCard/ProfileCard';
import HomeContentsLayout from '@/components/layouts/HomeContentsLayout/HomeContentsLayout';
import PageLayout from '@/components/layouts/PageLayout/PageLayout';

import { HOME_TEXT } from '@/constants/home';

import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className="bg-gray">
      <PageLayout isNotHome={false}>
        <main className="flex min-h-screen w-full items-center" role="main">
          <HomeContentsLayout>
            <div className="flex w-full justify-between gap-x-8">
              <div className="w-[38%]">
                <ProfileCard />
              </div>
              <div className="flex w-[62%] flex-col gap-y-8 bg-sky-100">
                <h2 className="bg-violet-200 text-6xl font-extrabold">{HOME_TEXT.quote}</h2>
                <div className="flex h-72 w-full gap-x-8 rounded-2xl bg-green-200">
                  <div className="h-72 w-9/12 rounded-2xl bg-orange-200">work1</div>
                  <div className="flex h-72 w-3/12 flex-col rounded-2xl bg-yellow-200">
                    <div className="h-1/2 rounded-t-2xl bg-rose-200">work2</div>
                    <div className="h-1/2 rounded-b-2xl bg-fuchsia-200">work3</div>
                  </div>
                </div>
                <div className="flex w-full grow gap-x-8 rounded-2xl bg-purple-200">
                  <div className="w-5/12 rounded-2xl bg-amber-200">work4</div>
                  <div className="w-7/12 rounded-2xl bg-lime-200">work4</div>
                </div>
              </div>
            </div>
          </HomeContentsLayout>
        </main>
      </PageLayout>
    </div>
  );
};

export default Home;
