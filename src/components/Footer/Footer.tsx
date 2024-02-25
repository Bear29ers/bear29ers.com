import type { FC } from 'react';

import { PROFILE_TEXT } from '@/common/constants/about';

const Footer: FC = () => {
  const year = new Date().getFullYear();

  return (
    <div className="mb-4 mt-24 flex w-full justify-center">
      <small className="text-center">&copy; {`${year} ${PROFILE_TEXT.userName}`} All Rights Reserved</small>
    </div>
  );
};

export default Footer;
