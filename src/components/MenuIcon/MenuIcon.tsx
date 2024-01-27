import type { FC } from 'react';

const MenuIcon: FC = () => {
  return (
    <button className="group relative overflow-hidden" type="button">
      <div className="flex h-5 w-5 origin-center flex-col justify-between transition-all duration-300">
        <div className="h-0.5 w-7 origin-left bg-dark transition-all duration-300 group-focus:translate-x-10" />
        <div className="h-0.5 w-7 origin-left rounded bg-dark transition-all delay-75 duration-300 group-focus:translate-x-10" />
        <div className="h-0.5 w-7 origin-left bg-dark transition-all delay-150 duration-300 group-focus:translate-x-10" />
        <div className="absolute top-2.5 flex w-0 -translate-x-10 items-center justify-between transition-all duration-500 group-focus:w-12 group-focus:translate-x-0">
          <div className="absolute h-0.5 w-5 rotate-0 bg-dark transition-all delay-300 duration-500 group-focus:rotate-45" />
          <div className="absolute h-0.5 w-5 -rotate-0 bg-dark transition-all delay-300 duration-500 group-focus:-rotate-45" />
        </div>
      </div>
    </button>
  );
};

export default MenuIcon;
