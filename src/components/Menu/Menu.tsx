'use client';

import { useState, type FC } from 'react';

import { usePathname } from 'next/navigation';

import MenuIcon from '@/components/menus/MenuIcon/MenuIcon';
import MenuWindow from '@/components/menus/MenuWindow/MenuWindow';

const Menu: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathname = usePathname();

  return (
    <div>
      {pathname !== '/' && (
        <div className="fixed right-8 top-8 z-50 lg:right-10">
          <MenuWindow isOpen={isOpen} />
          <div className="absolute right-0 top-0">
            <MenuIcon isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
