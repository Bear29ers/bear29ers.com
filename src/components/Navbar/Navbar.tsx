'use client';

import type { FC } from 'react';

import { motion } from 'framer-motion';

import { NAV_CONTENTS, SOCIAL_LINK } from '@/constants';

import FacebookIcon from '../Icons/FacebookIcon/FacebookIcon';
import GithubIcon from '../Icons/GithubIcon/GithubIcon';
import InstagramIcon from '../Icons/InstagramIcon/InstagramIcon';
import Logo from '../Logo/Logo';
import NavLink from '../NavLink/NavLink';

const Navbar: FC = () => {
  return (
    <header className="flex-between w-full px-32 py-8 font-medium" role="banner">
      <nav className="space-x-4">
        {NAV_CONTENTS.map((content) => (
          <NavLink href={content.href} title={content.title} key={content.id} />
        ))}
      </nav>
      <nav className="flex-center flex-wrap space-x-3">
        <motion.a
          href={SOCIAL_LINK.github}
          target="_blank"
          className="w-6"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}>
          <GithubIcon />
        </motion.a>
        <motion.a
          href={SOCIAL_LINK.facebook}
          target="_blank"
          className="w-6"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}>
          <FacebookIcon />
        </motion.a>
        <motion.a
          href={SOCIAL_LINK.instagram}
          target="_blank"
          className="w-6"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}>
          <InstagramIcon />
        </motion.a>
      </nav>
      <div className="absolute left-1/2 top-2 translate-x-1/2">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
