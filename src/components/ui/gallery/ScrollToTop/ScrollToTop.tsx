import type { FC } from 'react';

const ScrollToTop: FC = () => {
  const scrollToTop = () => {
    document.documentElement.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button type="button" className="size-14 rounded-full bg-[#007acc] flex-center" onClick={scrollToTop}>
      <svg
        className="size-8"
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="chevron-up"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512">
        <path
          fill="currentColor"
          d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"
        />
      </svg>
    </button>
  );
};

export default ScrollToTop;
