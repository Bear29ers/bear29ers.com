import type { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className="w-full pt-16 text-sm" role="contentinfo">
      <div className="flex-between pb-2">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className="flex items-center">
          Build With&nbsp;
          <span className="px-1 text-2xl text-primary">&#9825;</span>
          &nbsp;by&nbsp;Bear29ers
        </div>
      </div>
    </footer>
  );
};

export default Footer;
