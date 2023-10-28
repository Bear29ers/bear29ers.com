/* eslint-disable tailwindcss/no-custom-classname */
import type { FC } from 'react';

const Bear: FC = () => {
  return (
    <div className="relative">
      <button type="button" className="w-[120px] animate-updown">
        <div className="flex translate-y-[5px] animate-updown justify-between">
          <div className="h-10 w-11 skew-y-[-5deg] rounded-[50%] bg-millbrook" />
          <div className="h-10 w-11 skew-y-[5deg] rounded-[50%] bg-millbrook" />
        </div>
        <div className="bear-body-radius h-[115px] w-full bg-millbrook">
          <div className="bear-eyes-transition relative flex translate-y-[30px] justify-around">
            <div className="bear-eye-transition absolute left-[25px] h-2.5 w-2.5 animate-blink rounded-[50%] bg-coffeeBean" />
            <div className="bear-eye-transition absolute right-[25px] h-2.5 w-2.5 animate-blink rounded-[50%] bg-coffeeBean" />
          </div>
          <div className="bear-nose-radius bear-nose-transition relative m-auto h-[50px] w-10 translate-y-[40px] animate-nose bg-tan">
            <div className="bear-nose-inner-radius after:bear-nose-inner-after absolute left-1/2 top-1/2 h-[13px] w-[25px] -translate-x-1/2 -translate-y-1/2 bg-coffeeBean" />
          </div>
        </div>
      </button>
      <div className="absolute -bottom-8 left-1/2 m-auto mt-[-12px] block h-4 w-[100px] -translate-x-1/2 animate-shadow rounded-full bg-dark opacity-60 blur-md" />
    </div>
  );
};

export default Bear;
