import type { FC } from 'react';

import { useRouter } from 'next/navigation';

interface Props {
  url: string;
  text: string;
}

const AnimatedArrowButton: FC<Props> = ({ url, text }) => {
  const router = useRouter();
  return (
    <button type="button" className="group relative flex w-52 justify-end" onClick={() => router.push(url)}>
      <span
        className="relative m-0 block size-12 rounded-full bg-darkerGray transition-all duration-450 ease-custom-ease-in-out-quart group-hover:w-full md:bg-darker"
        aria-hidden="true">
        <span className="absolute inset-y-0 right-2.5 m-auto h-0.5 w-4.5 bg-none transition-all duration-450 ease-custom-ease-in-out-quart group-hover:-translate-x-4 group-hover:bg-white">
          <span className="absolute -top-1 left-px size-2.5 -rotate-45 border-l-2 border-t-2 border-white" />
        </span>
      </span>
      <div className="absolute inset-0 mr-3 py-3 pr-7 text-center font-bold leading-[1.6] text-hitGray transition-all duration-450 ease-custom-ease-in-out-quart group-hover:text-white">
        {text}
      </div>
    </button>
  );
};

export default AnimatedArrowButton;
