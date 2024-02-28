'use client';

import { useState, type FC } from 'react';

import { usePathname } from 'next/navigation';

import MenuIcon from '@/components/menus/MenuIcon/MenuIcon';

const Menu: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathname = usePathname();

  return (
    <div>
      {pathname !== '/' && (
        <div>
          <div className="fixed right-10 top-6 z-50">
            <MenuIcon isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
