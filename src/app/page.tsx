import ProfileCard from '@/components/ProfileCard/ProfileCard';
import Tbd from '@/components/Tbd/Tbd';
import HomeContentsLayout from '@/components/layouts/HomeContentsLayout/HomeContentsLayout';
import PageLayout from '@/components/layouts/PageLayout/PageLayout';

import { HOME_TEXT } from '@/constants/home';

import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className="bg-iron">
      <PageLayout isNotHome={false}>
        <main className="flex min-h-screen w-full items-center" role="main">
          <HomeContentsLayout>
            <div className="flex w-full justify-between gap-x-8">
              <div className="w-[38%]">
                <ProfileCard />
              </div>
              <div className="flex w-[62%] flex-col gap-y-8">
                <h2 className="text-6xl font-extrabold">{HOME_TEXT.quote}</h2>
                <div className="flex h-72 w-full gap-x-8 rounded-2xl">
                  <div className="h-72 w-9/12 rounded-2xl bg-orange-200">Gallery</div>
                  <div className="flex h-72 w-3/12 flex-col rounded-2xl bg-yellow-200">
                    <div className="h-1/2 rounded-t-2xl bg-rose-200">Time</div>
                    <div className="h-1/2 rounded-b-2xl bg-fuchsia-200">Weather</div>
                  </div>
                </div>
                <div className="flex w-full grow gap-x-8 rounded-2xl">
                  <Tbd width="w-5/12" />
                  <Tbd width="w-7/12" />
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
