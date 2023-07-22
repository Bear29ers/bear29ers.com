import type { FC } from 'react';

import arcticCodeVault from '../public/images/achievements/arctic-code-vault-contributor-default.png';
import pullShark from '../public/images/achievements/pull-shark-default.png';
import quickdraw from '../public/images/achievements/quickdraw-default--light.png';
import yolo from '../public/images/achievements/yolo-default.png';

import FacebookIcon from './components/Icons/FacebookIcon/FacebookIcon';
import GithubIcon from './components/Icons/GithubIcon/GithubIcon';
import InstagramIcon from './components/Icons/InstagramIcon/InstagramIcon';
import ThreadsIcon from './components/Icons/ThreadsIcon/ThreadsIcon';

import type { StaticImageData } from 'next/image';

type NavContents = {
  id: number;
  href: string;
  title: string;
};

// ナビゲーションコンテンツ
export const NAV_CONTENTS: NavContents[] = [
  {
    id: 1,
    href: '/',
    title: 'Home',
  },
  {
    id: 2,
    href: '/about',
    title: 'About',
  },
  {
    id: 3,
    href: '/projects',
    title: 'Projects',
  },
  {
    id: 4,
    href: '/articles',
    title: 'Articles',
  },
];

type SocialMedia = {
  id: number;
  href: string;
  describedby: string;
  text: string;
  component: FC;
};

// ソーシャルメディアアイコンのリスト
export const SOCIAL_MEDIA_LIST: SocialMedia[] = [
  {
    id: 1,
    href: 'https://github.com/Bear29ers',
    describedby: 'navlink-id-1',
    text: 'github',
    component: GithubIcon,
  },
  {
    id: 2,
    href: 'https://www.instagram.com/bear_27earl',
    describedby: 'navlink-id-2',
    text: 'instagram',
    component: InstagramIcon,
  },
  {
    id: 3,
    href: 'https://www.threads.net/@bear_27earl',
    describedby: 'navlink-id-3',
    text: 'threads',
    component: ThreadsIcon,
  },
  {
    id: 4,
    href: 'https://www.facebook.com/kumakuma1129',
    describedby: 'navlink-id-4',
    text: 'facebook',
    component: FacebookIcon,
  },
];

// Homeページテキスト
export const HOME_TEXT = {
  title: 'Code and Design make vision a reality',
  description: `As a front-end developer and designer, I really enjoy giving shape to my own ideas.\nExplore my personality and latest projests and articles in web development.`,
};

// Aboutページテキスト
export const PROFILE_TEXT = {
  fullName: 'Yuta Okuma',
  userName: 'Bear29ers',
  greeting: "Hi, there, I'm Yuta. Nice to see you!",
  shortGreeting: "Hi, there, I'm Yuta 🤟🐻",
  title: "I'm a front-end developer and designer!!",
  biographyList: [
    {
      id: 1,
      text: "Hi, I'm Yuta Okuma, a front-end developer and designer with a passion for creating beautiful, functional, and user-centered digital experiences.",
    },
    {
      id: 2,
      text: 'I played baseball for about 9 years as a child and my favorite teams are the Los Angeles Angeles and the New York Yankees. Shohei Ohtani, a two-way player, gives me courage and energy.',
    },
    {
      id: 3,
      text: 'I first encountered video production in high school when I was active in the Japanese taiko drumming culb and began making simple video works, which I decided to study video in earnest.',
    },
    {
      id: 4,
      text: 'I lived in Chiba until I graduated from high school and moved to Kyoto for university, where I majored in the contents business at the faculty of Image Arts and Sciences while independently producing animated videos using Adobe AfterEffects.',
    },
    {
      id: 5,
      text: 'In 2017, I took a leave of absence from university to study abroad in Toronto, Canada for about a year. This was a very meaningful time and also the most enjoyable year of my life.',
    },
    {
      id: 6,
      text: 'Gradually became interested in programming through the influence of a friend of mine that I met at one of my internships and started learning on my own from front-end languages. started my career as a developer in 2020 and now I am working as a front-end developer in Tokyo.',
    },
  ],
  organization: 'Gakken LEAP Co.,Ltd',
  location: 'Tokyo, Japan',
  website: 'https://bear29ers.github.io',
};

export type Achievement = {
  id: number;
  alt: string;
  src: StaticImageData;
};

// GitHubのAchievementsリスト
export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 1,
    alt: 'YOLO',
    src: yolo,
  },
  {
    id: 2,
    alt: 'Quickdraw',
    src: quickdraw,
  },
  {
    id: 3,
    alt: 'Pull Shark',
    src: pullShark,
  },
  {
    id: 4,
    alt: 'Arctic Code Vault Contributor',
    src: arcticCodeVault,
  },
];
