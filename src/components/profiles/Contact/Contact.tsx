import type { FC } from 'react';

import { motion } from 'framer-motion';

import FacebookIcon from '@/components/icons/FacebookIcon/FacebookIcon';
import GithubIcon from '@/components/icons/GithubIcon/GithubIcon';
import InstagramIcon from '@/components/icons/InstagramIcon/InstagramIcon';
import ThreadsIcon from '@/components/icons/ThreadsIcon/ThreadsIcon';

import { SOCIAL_MEDIA_LIST } from '@/common/constants/socialMedia';

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

const Contact: FC = () => {
  return (
    <div>
      <h3 className="mb-4 text-xl font-bold">🤝 Connect with me</h3>
      <div className="flex gap-x-6">
        {SOCIAL_MEDIA_LIST.map((socialMedia) => (
          <motion.a
            href={socialMedia.href}
            target="_blank"
            className="size-14"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            key={socialMedia.id}>
            {getIconComponent(socialMedia.text, false)}
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default Contact;
