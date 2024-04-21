import type { Dispatch, FC, SetStateAction } from 'react';

interface Props {
  isClicked: boolean;
  setIsClicked: Dispatch<SetStateAction<boolean>>;
}

const Bear: FC<Props> = ({ isClicked, setIsClicked }) => {
  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="relative z-30 size-full ">
      <div
        className={`bear-motion absolute left-1/2 top-1/2 w-[120px] -translate-x-1/2 -translate-y-1/2 ${isClicked ? 'left-[92%] top-[85%] scale-100' : 'left-1/2 top-1/2 scale-150'}`}
        data-testid="bear-wrapper">
        <button type="button" className="z-20 w-full animate-updown" onClick={handleClick}>
          <span className="hidden">Animated Bear</span>
          <span className="flex translate-y-[5px] animate-updown justify-between">
            <span className="h-10 w-11 skew-y-[-5deg] rounded-[50%] bg-millbrook" data-testid="bear-left-ear" />
            <span className="h-10 w-11 skew-y-[5deg] rounded-[50%] bg-millbrook" data-testid="bear-right-ear" />
          </span>
          <span className="bear-body-radius block h-[115px] w-full bg-millbrook">
            <span className="bear-eyes-transition relative flex translate-y-[30px] justify-around">
              <span
                className="bear-eye-transition absolute left-[25px] size-2.5 animate-blink rounded-[50%] bg-coffeeBean"
                data-testid="bear-left-eye"
              />
              <span
                className="bear-eye-transition absolute right-[25px] size-2.5 animate-blink rounded-[50%] bg-coffeeBean"
                data-testid="bear-right-eye"
              />
            </span>
            <span
              className="bear-nose-radius bear-nose-transition relative m-auto block h-[50px] w-10 translate-y-[40px] animate-nose bg-tan"
              data-testid="bear-nose">
              <span className="bear-nose-inner-radius after:bear-nose-inner-after absolute left-1/2 top-1/2 h-[13px] w-[25px] -translate-x-1/2 -translate-y-1/2 bg-coffeeBean" />
            </span>
          </span>
        </button>
        <div
          className="absolute -bottom-10 left-1/2 z-10 m-auto -mt-3 block h-4 w-[100px] -translate-x-1/2 animate-shadow rounded-full bg-white opacity-30 blur-md"
          data-testid="bear-shadow"
        />
      </div>
    </div>
  );
};

export default Bear;
