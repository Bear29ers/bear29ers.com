import type { FC } from 'react';

import { PROFILE_TEXT } from '@/common/constants/about';

const Footer: FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mb-4 mt-36 flex w-full justify-center ssm:mt-48" aria-label="Footer">
      <small className="text-center">&copy; {`${year} ${PROFILE_TEXT.userName}`} All Rights Reserved</small>
    </footer>
  );
};

export default Footer;
