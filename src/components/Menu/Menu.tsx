'use client';

import { useState, type FC } from 'react';

import { usePathname } from 'next/navigation';

import MenuIcon from '@/components/menus/MenuIcon/MenuIcon';
import MenuWindow from '@/components/menus/MenuWindow/MenuWindow';

import useMediaQuery from '@/common/hooks/useMediaQuery';

const Menu: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathname = usePathname();
  const isMobile = useMediaQuery('(max-width: 540px)');

  return (
    <div>
      {pathname !== '/' && (
        <div className="fixed right-2 top-2 z-50 xsm:right-8 xsm:top-8 lg:right-10">
          <MenuWindow isOpen={isOpen} isMobile={isMobile} />
          <div className="absolute right-0 top-0">
            <MenuIcon isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
