import Image from 'next/image';
import Link from 'next/link';

import AnimatedText from '@/components/commons/AnimatedText/AnimatedText';
import PageLayout from '@/components/layouts/PageLayout/PageLayout';
import TopContentsLayout from '@/components/layouts/TopContentsLayout/TopContentsLayout';

import { HOME_TEXT } from '@/constants/home';

import Profile from '../../public/images/low-poly-bear.png';

import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <PageLayout>
      <main className="flex min-h-screen w-full items-center" role="main">
        <TopContentsLayout>
          <div className="flex-between w-full">
            <div className="relative flex w-5/12 flex-col items-end">
              <div className="trapezoid h-16 w-[70%] rounded-tr-2xl bg-green-300" />
              <div className="rounded-b-2xl rounded-tl-2xl bg-blue-300 px-4 pb-4">
                <Image src={Profile} alt="Bear29ers" className="h-auto w-full pr-8" role="img" />
              </div>
            </div>
            <div className="flex w-7/12 flex-col items-center self-center">
              <AnimatedText text={HOME_TEXT.title} className="!text-left !text-6xl" />
              <p className="my-4 whitespace-pre-wrap text-base font-medium">{HOME_TEXT.description}</p>
              <div className="mt-2 flex items-center self-start">
                <Link
                  href="/about"
                  className="transition-500 flex items-center rounded-lg border-2 border-solid border-transparent bg-dark px-6 py-2.5 text-lg font-semibold text-light hover:border-dark hover:bg-light hover:text-dark"
                  role="button">
                  Explore
                </Link>
              </div>
            </div>
          </div>
        </TopContentsLayout>
      </main>
    </PageLayout>
  );
};

export default Home;
