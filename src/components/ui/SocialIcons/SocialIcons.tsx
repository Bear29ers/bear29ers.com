import { type FC } from 'react';

import { motion } from 'motion/react';

import useMediaQuery from '@/hooks/useMediaQuery/useMediaQuery';

import { SOCIAL_MEDIA_LIST } from '@/constants/socialMedia';

import getIconComponent from '@/utils/getIconComponent';

interface Props {
  lightMode: boolean;
}

const SocialIcons: FC<Props> = ({ lightMode }) => {
  const isMobile = useMediaQuery('(max-width: 1023px)');

  return (
    <div className="fixed bottom-3 left-1/2 z-40 flex -translate-x-1/2 items-center gap-x-8 lg:bottom-auto lg:left-0 lg:top-5 lg:translate-x-0 lg:flex-row-reverse lg:gap-x-4">
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
          {getIconComponent(socialMedia.text, lightMode && !isMobile)}
        </motion.a>
      ))}
      <motion.span
        className={`hidden h-0.5 w-full lg:block ${lightMode ? 'bg-dark' : 'bg-white'}`}
        initial={{ width: '0' }}
        animate={{ width: '128px' }}
        transition={{ type: 'spring', duration: 1.0, delay: 0.8 }}
        data-testid="icons-line"
      />
    </div>
  );
};

export default SocialIcons;
