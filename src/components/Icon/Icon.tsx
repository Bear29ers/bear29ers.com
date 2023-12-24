import type { FC } from 'react';

import FacebookIcon from '../Icons/FacebookIcon/FacebookIcon';
import GithubIcon from '../Icons/GithubIcon/GithubIcon';
import InstagramIcon from '../Icons/InstagramIcon/InstagramIcon';
import ThreadsIcon from '../Icons/ThreadsIcon/ThreadsIcon';

interface Props {
  iconName: string;
  isClicked: boolean;
}

const Icon: FC<Props> = ({ iconName, isClicked }) => {
  return (
    <>
      {iconName === 'github' && <GithubIcon isClicked={isClicked} />}
      {iconName === 'instagram' && <InstagramIcon />}
      {iconName === 'threads' && <ThreadsIcon isClicked={isClicked} />}
      {iconName === 'facebook' && <FacebookIcon />}
    </>
  );
};

export default Icon;
