'use client';

import type { FC } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Props = {
  href: string;
  title: string;
};

const NavLink: FC<Props> = ({ href, title }) => {
  const pathName = usePathname();

  return (
    <Link href={href} className="group relative" role="link">
      {title}
      <span
        className={`ease absolute -bottom-0.5 left-0 inline-block h-[2px] bg-dark transition-[width] duration-300 group-hover:w-full ${
          pathName === href ? 'w-full' : 'w-0'
        }`}>
        &nbsp;
      </span>
    </Link>
  );
};

export default NavLink;
