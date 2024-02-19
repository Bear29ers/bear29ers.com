import type { FC } from 'react';

const Bear: FC = () => {
  return (
    <div className='relative w-[120px] bg-pink-300'>
      <button type='button' className='w-full animate-updown'>
        <span className='hidden'>Animated Bear</span>
        <span className='flex translate-y-[5px] animate-updown justify-between'>
          <span className='h-10 w-11 skew-y-[-5deg] rounded-[50%] bg-millbrook' data-testid='left-ear' />
          <span className='h-10 w-11 skew-y-[5deg] rounded-[50%] bg-millbrook' data-testid='right-ear' />
        </span>
        <span className='block bear-body-radius h-[115px] w-full bg-millbrook'>
          <span className='bear-eyes-transition relative flex translate-y-[30px] justify-around'>
            <span
              className='bear-eye-transition absolute left-[25px] size-2.5 animate-blink rounded-[50%] bg-coffeeBean'
              data-testid='left-eye'
            />
            <span
              className='bear-eye-transition absolute right-[25px] size-2.5 animate-blink rounded-[50%] bg-coffeeBean'
              data-testid='right-eye'
            />
          </span>
          <span
            className='block bear-nose-radius bear-nose-transition relative m-auto h-[50px] w-10 translate-y-[40px] animate-nose bg-tan'
            data-testid='nose'
          >
            <span className='bear-nose-inner-radius after:bear-nose-inner-after absolute left-1/2 top-1/2 h-[13px] w-[25px] -translate-x-1/2 -translate-y-1/2 bg-coffeeBean' />
          </span>
        </span>
      </button>
      <div
        className='absolute -bottom-8 left-1/2 m-auto mt-[-12px] block h-4 w-[100px] -translate-x-1/2 animate-shadow rounded-full bg-dark opacity-60 blur-md'
        data-testid='shadow'
      />
    </div>
  );
};

export default Bear;
