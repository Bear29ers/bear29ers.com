import type { Dispatch, FC, SetStateAction } from 'react';

interface Props {
  menuIsActive: boolean;
  setMenuIsActive: Dispatch<SetStateAction<boolean>>;
}

const MenuIcon: FC<Props> = ({ menuIsActive, setMenuIsActive }) => {
  const handleClick = () => {
    setMenuIsActive((prevMenuIsActive) => !prevMenuIsActive);
  };

  return (
    <button className="group relative overflow-hidden" type="button" onClick={handleClick}>
      <div className="flex h-7 w-8 origin-center flex-col justify-between transition-all duration-300">
        <div
          className={`h-1 w-8 origin-left rounded bg-dark transition-all duration-300 ${
            menuIsActive ? 'translate-x-10' : ''
          }`}
          data-testid="menu-icon-line"
        />
        <div
          className={`h-1 w-8 origin-left rounded bg-dark transition-all delay-75 duration-300 ${
            menuIsActive ? 'translate-x-10' : ''
          }`}
          data-testid="menu-icon-line"
        />
        <div
          className={`h-1 w-8 origin-left rounded bg-dark transition-all delay-150 duration-300 ${
            menuIsActive ? 'translate-x-10' : ''
          }`}
          data-testid="menu-icon-line"
        />
        <div
          className={`absolute inset-0 flex w-0 -translate-x-10 items-center justify-between transition-all duration-500 group-focus:w-12 ${
            menuIsActive ? 'translate-x-0' : ''
          }`}>
          <div
            className={`absolute h-1 w-7 rotate-0 rounded bg-dark transition-all delay-300 duration-500 ${
              menuIsActive ? 'rotate-45' : ''
            }`}
          />
          <div
            className={`absolute h-1 w-7 -rotate-0 rounded bg-dark transition-all delay-300 duration-500 ${
              menuIsActive ? '-rotate-45' : ''
            }`}
          />
        </div>
      </div>
    </button>
  );
};

export default MenuIcon;
