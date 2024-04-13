import { forwardRef } from 'react';

import Magnetic from '../Magnetic/Magnetic';

const NavIcon = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div className="z-1 fixed cursor-pointer mix-blend-difference">
      <Magnetic>
        <div className='pointer-events-none relative flex flex-col gap-y-2 p-[30px] before:block before:h-0.5 before:w-[30px] before:bg-white before:mix-blend-difference before:content-[""] after:block after:h-0.5 after:w-[30px] after:bg-white after:mix-blend-difference after:content-[""]'>
          <div ref={ref} className="pointer-events-all absolute left-0 top-0 size-full hover:scale-[3]" />
        </div>
      </Magnetic>
    </div>
  );
});

NavIcon.displayName = 'NavIcon';
export default NavIcon;
