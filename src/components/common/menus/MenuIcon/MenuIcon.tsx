import type { Dispatch, FC, SetStateAction } from 'react';

interface Props {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const MenuIcon: FC<Props> = ({ isOpen, setIsOpen }) => {
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <button
      className="relative size-12 rounded-full bg-darkerGray flex-center xsm:size-14"
      type="button"
      onClick={handleClick}>
      <div className="group relative overflow-hidden">
        <div className="flex h-6 w-7 origin-center flex-col justify-between transition-all duration-300 xsm:h-7 xsm:w-8">
          <div
            className={`h-[3px] w-7 origin-left rounded bg-white transition-all duration-300 xsm:h-1 xsm:w-8 ${
              isOpen ? 'translate-x-10' : ''
            }`}
            data-testid="menu-icon-top-line"
          />
          <div
            className={`h-[3px] w-7 origin-left rounded bg-white transition-all delay-75 duration-300 xsm:h-1 xsm:w-8 ${
              isOpen ? 'translate-x-10' : ''
            }`}
            data-testid="menu-icon-middle-line"
          />
          <div
            className={`h-[3px] w-7 origin-left rounded bg-white transition-all delay-150 duration-300 xsm:h-1 xsm:w-8 ${
              isOpen ? 'translate-x-10' : ''
            }`}
            data-testid="menu-icon-bottom-line"
          />
          <div
            className={`absolute inset-0 flex w-0 -translate-x-10 items-center justify-between transition-all duration-500 group-focus:w-12 ${
              isOpen ? 'translate-x-0' : ''
            }`}
            data-testid="menu-icon-close">
            <div
              className={`absolute h-[3px] w-7 rotate-0 rounded bg-white transition-all delay-300 duration-500 xsm:h-1 xsm:w-8 ${
                isOpen ? 'rotate-45' : ''
              }`}
              data-testid="menu-icon-close-top"
            />
            <div
              className={`absolute h-[3px] w-7 -rotate-0 rounded bg-white transition-all delay-300 duration-500 xsm:h-1 xsm:w-8 ${
                isOpen ? '-rotate-45' : ''
              }`}
              data-testid="menu-icon-close-bottom"
            />
          </div>
        </div>
      </div>
    </button>
  );
};

export default MenuIcon;
