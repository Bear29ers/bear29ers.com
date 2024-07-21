import FacebookIcon from '@/components/icons/FacebookIcon/FacebookIcon';
import GithubIcon from '@/components/icons/GithubIcon/GithubIcon';
import InstagramIcon from '@/components/icons/InstagramIcon/InstagramIcon';
import ThreadsIcon from '@/components/icons/ThreadsIcon/ThreadsIcon';

const getIconComponent = (iconName: string, lightMode: boolean) => {
  return (
    <>
      {iconName === 'github' && <GithubIcon lightMode={lightMode} />}
      {iconName === 'instagram' && <InstagramIcon />}
      {iconName === 'threads' && <ThreadsIcon lightMode={lightMode} />}
      {iconName === 'facebook' && <FacebookIcon />}
    </>
  );
};

export default getIconComponent;
