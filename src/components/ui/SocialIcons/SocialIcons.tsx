import { useState, type FC, useEffect } from 'react';

import { motion } from 'framer-motion';

import useMediaQuery from '@/hooks/useMediaQuery/useMediaQuery';

import { SOCIAL_MEDIA_LIST } from '@/constants/socialMedia';

import getIconComponent from '@/utils/getIconComponent';


interface Props {
  lightMode: boolean;
}

const SocialIcons: FC<Props> = ({ lightMode }) => {
  const initialBarWidth = 128;
  const [barWidth, setBarWidth] = useState<number>(initialBarWidth);
  const isUnderXs = useMediaQuery('(max-width: 399px)');
  const isUnderXxs = useMediaQuery('(max-width: 499px)');

  useEffect(() => {
    if (isUnderXs) {
      setBarWidth(96);
    } else if (isUnderXxs) {
      setBarWidth(112);
    } else {
      setBarWidth(initialBarWidth);
    }
  }, [isUnderXs, isUnderXxs]);

  return (
    <div className="fixed left-1/2 top-5 z-40 flex -translate-x-1/2 flex-row-reverse items-center gap-x-4 xxs:left-0 xxs:translate-x-0">
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
          {getIconComponent(socialMedia.text, lightMode)}
        </motion.a>
      ))}
      <motion.span
        className={`hidden h-0.5 w-full xxs:block ${lightMode ? 'bg-dark' : 'bg-white'}`}
        initial={{ width: '0' }}
        animate={{ width: `${barWidth}px` }}
        transition={{ type: 'spring', duration: 1.0, delay: 0.8 }}
        data-testid="icons-line"
      />
    </div>
  );
};

export default SocialIcons;
