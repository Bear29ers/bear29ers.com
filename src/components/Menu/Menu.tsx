'use client';

import { type FC, useRef } from 'react';

import { usePathname } from 'next/navigation';

import NavIcon from '@/components/NavIcon/NavIcon';
import StickyCursor from '@/components/StickyCursor/StickyCursor';

const Menu: FC = () => {
  // const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathname = usePathname();
  const stickyElement = useRef<HTMLDivElement>(null);

  return (
    <div>
      {pathname !== '/' && (
        <div className="fixed right-10 top-8 z-50">
          {/* <MenuIcon ref={stickyElement} isOpen={isOpen} setIsOpen={setIsOpen} /> */}
          <NavIcon />
        </div>
      )}
      <StickyCursor stickyElement={stickyElement} />
    </div>
  );
};

export default Menu;
