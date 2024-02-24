import FacebookIcon from '@/components/icons/FacebookIcon/FacebookIcon';
import GithubIcon from '@/components/icons/GithubIcon/GithubIcon';
import InstagramIcon from '@/components/icons/InstagramIcon/InstagramIcon';
import ThreadsIcon from '@/components/icons/ThreadsIcon/ThreadsIcon';

const getIconComponent = (iconName: string, darkMode: boolean) => {
  return (
    <>
      {iconName === 'github' && <GithubIcon darkMode={darkMode} />}
      {iconName === 'instagram' && <InstagramIcon />}
      {iconName === 'threads' && <ThreadsIcon darkMode={darkMode} />}
      {iconName === 'facebook' && <FacebookIcon />}
    </>
  );
};

export default getIconComponent;
