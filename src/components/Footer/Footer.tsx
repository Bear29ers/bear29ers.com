import type { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className="w-full  text-sm" role="contentinfo">
      <div className="flex-between px-32 pb-2">
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
