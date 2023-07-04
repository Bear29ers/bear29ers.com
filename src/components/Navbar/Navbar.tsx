import type { FC } from 'react';

import Link from 'next/link';

import { NAV_CONTENTS } from '@/constants';

import Logo from '../Logo/Logo';
import NavLink from '../NavLink/NavLink';

const Navbar: FC = () => {
  return (
    <header className="flex w-full items-center justify-between px-32 py-8 font-medium" role="banner">
      <nav className="space-x-4">
        {NAV_CONTENTS.map((content) => (
          <NavLink href={content.href} title={content.title} key={content.id} />
        ))}
      </nav>
      <nav>
        <Link href="/" target="_brank">
          T
        </Link>
        <Link href="/" target="_brank">
          T
        </Link>
        <Link href="/" target="_brank">
          T
        </Link>
        <Link href="/" target="_brank">
          T
        </Link>
        <Link href="/" target="_brank">
          T
        </Link>
        <Link href="/" target="_brank">
          T
        </Link>
      </nav>
      <div className="absolute left-1/2 top-2 translate-x-1/2">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
