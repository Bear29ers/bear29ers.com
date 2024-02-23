import type { FC } from 'react';

import { motion } from 'framer-motion';

import FacebookIcon from '@/components/icons/FacebookIcon/FacebookIcon';
import GithubIcon from '@/components/icons/GithubIcon/GithubIcon';
import InstagramIcon from '@/components/icons/InstagramIcon/InstagramIcon';
import ThreadsIcon from '@/components/icons/ThreadsIcon/ThreadsIcon';

import { SOCIAL_MEDIA_LIST } from '@/common/constants/socialMedia';

interface Props {
  isClicked: boolean;
}

const getIconComponent = (iconName: string, isClicked: boolean) => {
  return (
    <>
      {iconName === 'github' && <GithubIcon isClicked={isClicked} />}
      {iconName === 'instagram' && <InstagramIcon />}
      {iconName === 'threads' && <ThreadsIcon isClicked={isClicked} />}
      {iconName === 'facebook' && <FacebookIcon />}
    </>
  );
};

const SocialIcons: FC<Props> = ({ isClicked }) => {
  return (
    <div className="fixed bottom-0 left-8 flex flex-col items-center gap-y-4">
      {SOCIAL_MEDIA_LIST.map((socialMedia) => (
        <motion.a
          key={socialMedia.id}
          href={socialMedia.href}
          target="_blank"
          className="w-6"
          role="link"
          aria-describedby={socialMedia.text}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1.0,
            transition: { type: 'spring', duration: 1.0, delay: 1.0 + 0.3 * socialMedia.id },
          }}
          whileHover={{ scale: 1.1, transition: { type: 'spring', stiffness: 400, damping: 10 } }}
          whileTap={{ scale: 0.9, transition: { type: 'spring', stiffness: 400, damping: 10 } }}>
          {getIconComponent(socialMedia.text, isClicked)}
        </motion.a>
      ))}
      <motion.span
        className={`h-32 w-0.5 ${isClicked ? 'bg-iron' : 'bg-dark'}`}
        initial={{ height: '0' }}
        animate={{ height: '128px' }}
        transition={{ type: 'spring', duration: 1.0, delay: 0.8 }}
        data-testid="icons-line"
      />
    </div>
  );
};

export default SocialIcons;
