'use client';

import { useState, type FC } from 'react';

import MenuIcon from '@/components/common/menus/MenuIcon/MenuIcon';
import MenuWindow from '@/components/common/menus/MenuWindow/MenuWindow';

import useMediaQuery from '@/hooks/useMediaQuery/useMediaQuery';

interface Props {
  pathname: string;
  locale: string;
}

const Menu: FC<Props> = ({ pathname, locale }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const isMobile = useMediaQuery('(max-width: 540px)');

  return (
    <div>
      {!['/', '/ja'].includes(pathname) && (
        <div className="fixed right-4 top-4 z-50 xsm:right-8 xsm:top-8 lg:right-10">
          <MenuWindow isOpen={isOpen} isMobile={isMobile} pathname={pathname} locale={locale} />
          <div className="absolute right-0 top-0">
            <MenuIcon isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
