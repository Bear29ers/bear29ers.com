import Link from 'next/link';

import SocialIcons from '@/components/commons/SocialIcons/SocialIcons';

// import { HOME_TEXT } from '@/constants/home';

import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <main role="main" className="relative h-screen w-screen bg-iron">
      {/* Social Icons */}
      <SocialIcons />
      {/* Page Navigation */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 rotate-90 text-lg line-through">Works</div>
      <Link href="/about" className="absolute bottom-2 left-1/2 -translate-x-1/2 text-lg">
        About
      </Link>
      <div className="absolute left-0 top-1/2 -translate-y-1/2 -rotate-90 text-lg line-through">Gallery</div>
    </main>
  );
};

export default Home;
