import Image from 'next/image';
import Link from 'next/link';

import AnimatedText from '@/components/commons/AnimatedText/AnimatedText';
import ContentsLayout from '@/components/layouts/ContentsLayout/ContentsLayout';
import PageLayout from '@/components/layouts/PageLayout/PageLayout';

import { HOME_TEXT } from '@/constants';

import Profile from '../../public/images/low-poly-bear.png';

import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <PageLayout>
      <main className="flex min-h-screen w-full items-center text-dark" role="main">
        <ContentsLayout className="pt-0">
          <div className="flex-between w-full">
            <div className="w-1/2">
              <Image src={Profile} alt="Bear29ers" className="h-auto w-full p-8" role="img" />
            </div>
            <div className="flex w-1/2 flex-col items-center self-center">
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
        </ContentsLayout>
      </main>
    </PageLayout>
  );
};

export default Home;
