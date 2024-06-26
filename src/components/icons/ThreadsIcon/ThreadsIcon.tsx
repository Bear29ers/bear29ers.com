import type { FC } from 'react';

interface Props {
  lightMode: boolean;
}

const ThreadsIcon: FC<Props> = ({ lightMode }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    className="h-auto w-full"
    role="img"
    aria-label="ThreadsIcon">
    <rect x="0" y="0" width="100%" height="100%" fill="transparent" />
    <g>
      <path
        d="M286.92 0h776.09c157.81 0 286.92 129.11 286.92 286.92v776.09c0 157.81-129.11 286.92-286.92 286.92H286.92C129.11 1349.93 0 1220.82 0 1063.01V286.92C0 129.11 129.11 0 286.92 0z"
        style={{
          stroke: 'none',
          strokeWidth: 1,
          strokeDasharray: 'none',
          strokeLinecap: 'butt',
          strokeDashoffset: 0,
          strokeLinejoin: 'miter',
          strokeMiterlimit: 4,
          fill: `${lightMode ? '#000' : '#D2D8D9'}`,
          fillRule: 'evenodd',
          opacity: 1,
        }}
        transform="matrix(.3688 0 0 .3688 6.978 6.978)"
        data-testid="threads-background"
      />
      <path
        d="M679.49 1183.35c-102.8 0-150.07-12.67-228.6-54.95-68.04-36.63-126.7-85.66-158.1-156.03C180.28 720.3 214.46 343.3 454.9 218.01c122.09-63.61 315.76-70.6 439.8-7.54 118.98 60.49 176.55 154.86 224.17 275.94l-97.2 27.77C976.78 351.1 868.62 260.75 693.06 260.75c-69.38 0-132.34 6.97-185.25 33.2-126.56 62.71-178.42 209.82-183.52 358.83-3.71 108.28 13.79 217.58 62.11 296.22 55.27 89.94 170.12 146.82 277.78 146.82 100.84 0 181.98-17.53 244.56-76.23 85.22-79.95 102.98-207.44-5.65-285.17-33.46 285.57-420.7 269.28-420.7 42.3 0-47.13 18.33-88.26 54.98-123.38 72.79-69.75 182.31-49.14 273.65-50.52-9.63-43.11-46.28-105.57-116.63-105.57-54.21 0-100.92 13.63-126.03 55.61l-75.67-49.09c32.05-60.18 96.67-99.7 195.81-99.7s196.19 64.87 212.28 187.89l4.97 37.99c56.04 22.61 96.38 64.79 124.39 107.29 78.75 119.5 35.33 272.79-77.13 368.09-61.36 52-152.55 78.01-273.51 78.01zM572.74 774.8c0 46.76 49.61 81.73 97.64 81.73 53.58 0 90.42-15.11 110.51-45.33 20.09-30.22 30.14-66.62 30.14-109.18-55.04-13.99-150.8-24.02-201.55 9.57-23.9 15.82-36.73 35.97-36.73 63.21z"
        style={{
          stroke: 'none',
          strokeWidth: 1,
          strokeDasharray: 'none',
          strokeLinecap: 'butt',
          strokeDashoffset: 0,
          strokeLinejoin: 'miter',
          strokeMiterlimit: 4,
          fill: `${lightMode ? '#D2D8D9' : '#000'}`,
          fillRule: 'nonzero',
          opacity: 1,
        }}
        transform="matrix(.3688 0 0 .3688 7.005 6.997)"
        data-testid="threads-logo"
      />
    </g>
  </svg>
);

export default ThreadsIcon;
