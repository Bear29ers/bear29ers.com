'use client';

import { useState, type FC, useRef } from 'react';

import { usePathname } from 'next/navigation';

import StickyCursor from '@/components/StickyCursor/StickyCursor';
import MenuIcon from '@/components/menus/MenuIcon/MenuIcon';

const Menu: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathname = usePathname();
  const stickyElement = useRef<HTMLDivElement | undefined>(null);

  return (
    <div>
      {pathname !== '/' && (
        <div className="fixed right-10 top-8 z-50">
          <div className="absolute right-0 top-0">
            <MenuIcon ref={stickyElement} isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        </div>
      )}
      <StickyCursor stickyElement={stickyElement} />
    </div>
  );
};

export default Menu;
