'use client';

import { useState, type FC } from 'react';

import { usePathname } from 'next/navigation';

import MenuIcon from '@/components/menus/MenuIcon/MenuIcon';
import PixelBackground from '@/components/menus/PixelBackground/PixelBackground';

const Menu: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathname = usePathname();

  return (
    <div>
      {pathname !== '/' && (
        <div>
          <div className="fixed right-8 top-3 z-50">
            <MenuIcon isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
          <PixelBackground isDisplay={isOpen} />
        </div>
      )}
    </div>
  );
};

export default Menu;
