'use client';

import { useState, type FC } from 'react';

import MenuIcon from '@/components/menus/MenuIcon/MenuIcon';

const Menu: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="fixed right-8 top-3 z-50">
      <MenuIcon isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default Menu;
