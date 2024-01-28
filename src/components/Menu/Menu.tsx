import type { FC } from 'react';

import { MENU_ITEMS } from '@/constants/menu';

interface Props {
  menuIsActive: boolean;
}

const Menu: FC<Props> = ({ menuIsActive }) => {
  return (
    // TODO: usePathnameでパス名を取得して、現在のページのメニューのopacityを100にする
    // TODO: 表示する際にピクセルバックグラウンドに合わせて、少しdelayをつける + opacityでアニメーションする
    <div className={`relative z-40 h-screen w-screen ${menuIsActive ? 'block' : 'hidden'}`}>
      <div className="flex-center absolute inset-0 -left-1/4">
        <ul className="flex flex-col gap-y-4">
          {/* TODO: constantsからデータだけを引っ張ってきて、ループで作成する */}
          {MENU_ITEMS.map((menuItem) => (
            <li key={menuItem.id}>
              {/* TODO: Linkコンポーネントに変更する */}
              <a
                className={`text-9xl font-black text-dark opacity-30 transition-opacity hover:opacity-100 ${
                  !menuItem.isValid ? 'line-through opacity-10 hover:opacity-10' : ''
                }`}
                href={menuItem.href}>
                {menuItem.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
