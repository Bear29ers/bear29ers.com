import type { FC } from 'react';

import Link from 'next/link';

const Navbar: FC = () => {
  return (
    <header className="flex w-full items-center justify-between px-32 py-8 font-medium">
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/articles">Articles</Link>
      </nav>
      <h2>Logo</h2>
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
    </header>
  );
};

export default Navbar;
