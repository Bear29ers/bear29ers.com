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
    <button className="flex-center relative size-14 rounded-full bg-persianPink" type="button" onClick={handleClick}>
      <div className="group relative overflow-hidden">
        <div className="flex h-7 w-8 origin-center flex-col justify-between transition-all duration-300">
          <div
            className={`h-1 w-8 origin-left rounded bg-dark transition-all duration-300 ${
              isOpen ? 'translate-x-10' : ''
            }`}
            data-testid="menu-icon-top-line"
          />
          <div
            className={`h-1 w-8 origin-left rounded bg-dark transition-all delay-75 duration-300 ${
              isOpen ? 'translate-x-10' : ''
            }`}
            data-testid="menu-icon-middle-line"
          />
          <div
            className={`h-1 w-8 origin-left rounded bg-dark transition-all delay-150 duration-300 ${
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
              className={`absolute h-1 w-8 rotate-0 rounded bg-dark transition-all delay-300 duration-500 ${
                isOpen ? 'rotate-45' : ''
              }`}
              data-testid="menu-icon-close-top"
            />
            <div
              className={`absolute h-1 w-8 -rotate-0 rounded bg-dark transition-all delay-300 duration-500 ${
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
