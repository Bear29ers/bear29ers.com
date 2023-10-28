/* eslint-disable tailwindcss/no-custom-classname */
import type { FC } from 'react';

const Bear: FC = () => {
  return (
    <>
      <div className="w-[60px]">
        <div className="flex translate-y-[2.5px] justify-between">
          <div className="h-5 w-[22px] skew-y-[-5deg] rounded-[50%] bg-millbrook" />
          <div className="h-5 w-[22px] skew-y-[5deg] rounded-[50%] bg-millbrook" />
        </div>
        <div className="bear-body-radius h-[57.5px] w-full bg-millbrook">
          <div className="bear__eyes bear-eyes-transition relative flex translate-y-[15px] justify-around">
            <div className="bear-eye-transition left-[12.5px] h-[5px] w-[5px] rounded-[50%] bg-coffeeBean" />
            <div className="bear-eye-transition right-[12.5px] h-[5px] w-[5px] rounded-[50%] bg-coffeeBean" />
          </div>
          <div className="bear-nose-radius bear-nose-transition relative m-auto h-[25px] w-5 translate-y-[20px] bg-tan">
            <div className="bear-nose-inner-radius after:bear-nose-inner-after absolute left-1/2 top-1/2 h-[6.5px] w-[12.5px] -translate-x-1/2 -translate-y-1/2 bg-coffeeBean" />
          </div>
        </div>
      </div>
      <div className="shadow" />
    </>
  );
};

export default Bear;
