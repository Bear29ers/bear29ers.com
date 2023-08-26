'use client';

import type { FC } from 'react';

import { motion } from 'framer-motion';

import { NAV_CONTENTS } from '../../../constants/nav';
import { SOCIAL_MEDIA_LIST } from '../../../constants/socialMedia';
import Logo from '../Logo/Logo';
import NavLink from '../NavLink/NavLink';

const Navbar: FC = () => {
  return (
    <header className="flex-between w-full py-8 font-medium" role="banner">
      <nav className="space-x-4">
        {NAV_CONTENTS.map((content) => (
          <NavLink href={content.href} title={content.title} key={content.id} />
        ))}
      </nav>
      <nav className="flex-center flex-wrap space-x-3">
        {SOCIAL_MEDIA_LIST.map((socialMedia) => (
          <motion.a
            href={socialMedia.href}
            target="_blank"
            className="w-6"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            role="link"
            aria-describedby={socialMedia.describedby}
            key={socialMedia.id}>
            <socialMedia.component />
            <div id={socialMedia.describedby} className="hidden">
              {socialMedia.text}
            </div>
          </motion.a>
        ))}
      </nav>
      <div className="absolute left-1/2 top-2 translate-x-1/2">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
