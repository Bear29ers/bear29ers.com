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
        className={`bear-motion absolute -translate-x-1/2 -translate-y-1/2 ${isClicked ? 'left-1/2 top-32 scale-[0.65] ssm:left-[calc(100%-60px)] ssm:top-[calc(100%-115px)] xsm:top-[calc(100%-100px)] md:left-[calc(100%-80px)] md:top-[calc(100%-110px)] md:scale-[0.8] lg:left-[calc(100%-100px)] lg:top-[calc(100%-130px)] lg:scale-100' : 'left-1/2 top-1/2 scale-100 md:scale-[1.2] lg:scale-150'}`}
        data-testid="bear-wrapper">
        <div className="flex w-[120px] flex-col gap-y-3.5">
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
          <span
            className={`z-10 m-auto block h-4 w-[100px] animate-shadow rounded-full opacity-30 blur-md ${isClicked ? 'bg-dark ssm:bg-white' : 'bg-white'}`}
            data-testid="bear-shadow"
          />
        </div>
      </div>
    </div>
  );
};

export default Bear;
