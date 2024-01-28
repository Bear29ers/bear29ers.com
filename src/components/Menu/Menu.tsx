import type { FC } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { MENU_ITEMS } from '@/constants/menu';

interface Props {
  menuIsActive: boolean;
}

const Menu: FC<Props> = ({ menuIsActive }) => {
  const pathname = usePathname();

  return (
    // TODO: 表示する際にピクセルバックグラウンドに合わせて、少しdelayをつける + opacityでアニメーションする
    <div className={`relative z-40 h-screen w-screen ${menuIsActive ? 'block' : 'hidden'}`}>
      <div className="flex-center absolute inset-0 -left-1/4">
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
    </div>
  );
};

export default Menu;
