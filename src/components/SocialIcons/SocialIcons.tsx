'use client';

import type { FC } from 'react';

import { motion } from 'framer-motion';

import { SOCIAL_MEDIA_LIST } from '@/constants/socialMedia';

interface Props {
  isClicked: boolean;
}

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
          aria-describedby={socialMedia.describedby}>
          {/* TODO: textによって直接コンポーネントを呼び出す */}
          {socialMedia.text === 'github' || socialMedia.text === 'threads' ? (
            <socialMedia.component isClicked={isClicked} />
          ) : (
            <socialMedia.component />
          )}
          {/* TODO: GitHubとThreadsのstoryファイルとtestファイルに条件分岐を対応させる */}
        </motion.a>
      ))}
      <span className={`h-32 w-0.5 ${isClicked ? 'bg-iron' : 'bg-dark'}`} />
    </div>
  );
};

export default SocialIcons;
