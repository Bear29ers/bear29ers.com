import type { FC } from 'react';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { MENU_ITEMS } from '@/constants/menu';

interface Props {
  menuIsActive: boolean;
}

const variants = {
  initial: {
    opacity: 0,
  },
  open: {
    opacity: 1,
  },
  close: {
    opacity: 0,
  },
};

const Menu: FC<Props> = ({ menuIsActive }) => {
  const pathname = usePathname();

  return (
    <motion.div
      className="relative z-40 w-full"
      variants={variants}
      initial="initial"
      animate={menuIsActive ? 'open' : 'close'}>
      <div className="flex-center fixed inset-0 -left-1/4">
        <ul className="flex flex-col gap-y-4">
          {MENU_ITEMS.map((menuItem) => (
            // TODO: framer-motionでホバーリンクをアニメーションさせる
            <li key={menuItem.id}>
              <Link
                className={`text-9xl font-black text-dark opacity-30 transition-opacity hover:opacity-100 ${
                  !menuItem.isValid ? 'pointer-events-none line-through opacity-10 hover:opacity-10' : ''
                } ${menuItem.href === pathname ? 'opacity-100' : ''}`}
                href={menuItem.href}
                aria-disabled={!menuItem.isValid}>
                {menuItem.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default Menu;
