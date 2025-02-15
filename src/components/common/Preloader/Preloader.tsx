import type { FC } from 'react';

const Preloader: FC = () => {
  return (
    <div className="flex">
      <div className="relative mx-4 inline-block size-11 before:absolute before:left-[19px] before:top-[37px] before:size-1.5 before:translate-x-[-18px] before:translate-y-[-18px] before:animate-dotRect before:rounded-full before:bg-tan before:content-['']">
        <svg viewBox="0 0 80 80" className="size-full">
          <circle
            cx="40"
            cy="40"
            r="32"
            className="animate-pathCircle fill-none stroke-darkerGray stroke-[10]"
            style={{ strokeDasharray: '150 50 150 50', strokeDashoffset: 75 }}
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="relative mx-4 inline-block h-11 w-12 before:absolute before:left-[21px] before:top-[37px] before:size-1.5 before:translate-x-[-10px] before:translate-y-[-18px] before:animate-dotTriangle before:rounded-full before:bg-tan before:content-['']">
        <svg viewBox="0 0 86 80" className="size-full">
          <polygon
            points="43 8 79 72 7 72"
            className="animate-pathTriangle fill-none stroke-darkerGray stroke-[10]"
            style={{ strokeDasharray: '145 76 145 76', strokeDashoffset: 0 }}
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="relative mx-4 inline-block size-11 before:absolute before:left-[19px] before:top-[37px] before:size-1.5 before:translate-x-[-18px] before:translate-y-[-18px] before:animate-dotRect before:rounded-full before:bg-tan before:content-['']">
        <svg viewBox="0 0 80 80" className="size-full">
          <rect
            x="8"
            y="8"
            width="64"
            height="64"
            className="animate-pathRect fill-none stroke-darkerGray stroke-[10]"
            style={{ strokeDasharray: '192 64 192 64', strokeDashoffset: 0 }}
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default Preloader;
