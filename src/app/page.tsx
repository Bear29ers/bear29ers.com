import Image from 'next/image';

import PageLayout from '@/components/PageLayout/PageLayout';

import { HOME_TEXT } from '@/constants';

import Profile from '../../public/images/low-poly-bear.png';

import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <main className="flex min-h-screen w-full items-center text-dark" role="main">
      <PageLayout className="pt-0">
        <div className="flex-between w-full">
          <div className="w-1/2">
            <Image src={Profile} alt="Bear29ers" className="h-auto w-full" role="img" />
          </div>
          <div>
            <h1>{HOME_TEXT.title}</h1>
            <p>{HOME_TEXT.description}</p>
          </div>
        </div>
      </PageLayout>
    </main>
  );
};

export default Home;
