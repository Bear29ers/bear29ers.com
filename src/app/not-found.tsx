import Link from 'next/link';

import AnimatedText from '@/components/AnimatedText/AnimatedText';

import type { NextPage } from 'next';

const NotFoundPage: NextPage = () => {
  return (
    <div className="h-screen w-screen flex-col bg-dark text-white flex-center">
      <div className="gap-x-28 flex-center sm:gap-x-36">
        <AnimatedText text="4" classes="text-[120px] sm:text-[150px]" />
        <AnimatedText text="4" classes="text-[120px] sm:text-[150px]" />
      </div>
      <div className="relative mr-32 h-20 w-[350px] scale-75 sm:mr-44 sm:h-28 sm:scale-100">
        <svg className="absolute bottom-0 left-0 animate-hit" viewBox="0 0 337.4 42.6">
          <path
            d="M95.2 12.7c-36.4 1.4-74.9-.2-85-.7C8.9 7.1 6 7.3 6 7.3s-6 1-6 13.8 4.7 14.8 6.5 14.8c2.5 0 3.4-4.2 3.6-5.2 10.1-.5 48.6-2.1 85-.7 15.5.6 42.9 2 72 3.6V9.1c-29.1 1.6-56.5 3-71.9 3.6zM323 .1s-33.5 1.7-43.1 2.5c-5.3.5-47.8 3-92 5.4v26.6c44.2 2.4 86.7 4.9 92 5.4 9.6.8 43.1 2.5 43.1 2.5s14.4 2.5 14.4-21v-.4c0-23.5-14.4-21-14.4-21z"
            fill="#d2b48c"
          />
          <path d="M167.1 9.1v24.3c6.9.4 13.8.7 20.8 1.1V8c-6.9.4-13.9.7-20.8 1.1z" fill="#005A9C" />
        </svg>
        <svg className="absolute bottom-[50px] right-14 size-16 animate-bounce" viewBox="0 0 46.6 46.6">
          <circle cx={23.3} cy={23.3} r={23.3} fill="#ffffff" />
          <path
            d="M22.4 16.4c-5.6 0-11.9-1.2-18.1-4.8-1.2-.7-1.6-2.2-.9-3.4.7-1.2 2.3-1.6 3.5-.9 15.6 9.2 32.8.1 32.9 0 1.2-.7 2.7-.2 3.4 1 .7 1.2.2 2.7-1 3.4-.5.2-8.9 4.7-19.8 4.7zM5.6 39.1c-.9 0-1.7-.5-2.2-1.3-.7-1.2-.2-2.7 1-3.4.8-.4 19.7-10.6 37.9 0 1.2.7 1.6 2.2.9 3.4s-2.2 1.6-3.4.9c-15.8-9.2-32.8 0-33 .1-.4.2-.8.3-1.2.3z"
            fill="#dc143c"
          />
        </svg>
      </div>
      <div className="mt-24 flex-col gap-y-8 flex-center">
        <h2 className="text-3xl font-semibold sm:text-5xl">Page Not Found</h2>
        <div className="flex-col flex-center">
          <p className="sm:text-xl">I&apos;m sorry, the page you requested could not be found.</p>
          <p className="sm:text-xl">Please go back to the homepage.</p>
        </div>
        <Link
          href="/"
          className="w-fit rounded-3xl bg-pink-500 px-8 py-2 font-medium uppercase text-white transition-colors duration-500 ease-in-out hover:bg-pink-400 sm:text-lg">
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
