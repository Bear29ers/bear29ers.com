import type { FC } from 'react';

// Tailwind CSS
export const TailwindDark: FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={256} height={256} fill="none" role="img" data-testid="tailwind">
    <rect width={256} height={256} fill="#242938" rx={60} />
    <path
      fill="url(#a)"
      fillRule="evenodd"
      d="M83 110c6-24 21.001-36 45-36 36 0 40.5 27 58.5 31.5 12.001 3.001 22.5-1.499 31.5-13.5-5.999 23.999-21.001 36-45 36-36 0-40.5-27-58.5-31.5C102.499 93.5 92 98 83 110Zm-45 54c6-23.999 21-36 45-36 36 0 40.5 27 58.5 31.5 12.001 3.001 22.5-1.499 31.5-13.5-5.999 23.999-21.001 36-45 36-36 0-40.5-27-58.5-31.5-12-3.001-22.5 1.499-31.5 13.5Z"
      clipRule="evenodd"
    />
    <defs>
      <linearGradient id="a" x1={86.5} x2={163.5} y1={74} y2={185.5} gradientUnits="userSpaceOnUse">
        <stop stopColor="#32B1C1" />
        <stop offset={1} stopColor="#14C6B7" />
      </linearGradient>
    </defs>
  </svg>
);
