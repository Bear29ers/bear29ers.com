import type { FC } from 'react';

import { motion } from 'framer-motion';

import { SOCIAL_MEDIA_LIST } from '@/common/constants/socialMedia';
import getIconComponent from '@/common/functions/getIconComponent';

interface Props {
  darkMode: boolean;
}

const SocialIcons: FC<Props> = ({ darkMode }) => {
  return (
    <div className="fixed left-0 top-5 z-40 flex flex-row-reverse items-center gap-x-4">
      {SOCIAL_MEDIA_LIST.map((socialMedia) => (
        <motion.a
          key={socialMedia.id}
          href={socialMedia.href}
          target="_blank"
          className="w-7"
          role="link"
          aria-describedby={socialMedia.text}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1.0,
            transition: { type: 'spring', duration: 1.0, delay: 1.0 + 0.3 * socialMedia.id },
          }}
          whileHover={{ scale: 1.1, transition: { type: 'spring', stiffness: 400, damping: 10 } }}
          whileTap={{ scale: 0.9, transition: { type: 'spring', stiffness: 400, damping: 10 } }}>
          {getIconComponent(socialMedia.text, darkMode)}
        </motion.a>
      ))}
      <motion.span
        className={`h-0.5 w-32 ${darkMode ? 'bg-iron' : 'bg-dark'}`}
        initial={{ width: '0' }}
        animate={{ width: '128px' }}
        transition={{ type: 'spring', duration: 1.0, delay: 0.8 }}
        data-testid="icons-line"
      />
    </div>
  );
};

export default SocialIcons;
