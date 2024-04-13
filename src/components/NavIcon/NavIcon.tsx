import type { FC } from 'react';

const NavIcon: FC = () => {
  return (
    <div className="cursor-pointer mix-blend-difference">
      <div className='pointer-events-none relative flex flex-col gap-y-2 p-[30px] before:block before:h-0.5 before:w-[30px] before:bg-black before:mix-blend-difference before:content-[""] after:block after:h-0.5 after:w-[30px] after:bg-black after:mix-blend-difference after:content-[""]' />
    </div>
  );
};

export default NavIcon;
