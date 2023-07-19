import arcticCodeVault from '../public/images/achievements/arctic-code-vault-contributor-default.png';
import pullShark from '../public/images/achievements/pull-shark-default.png';
import quickdraw from '../public/images/achievements/quickdraw-default--light.png';
import yolo from '../public/images/achievements/yolo-default.png';

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

// ナビゲーションのソーシャルメディアリンク
export const SOCIAL_LINK = {
  github: 'https://github.com/Bear29ers',
  facebook: 'https://www.facebook.com/kumakuma1129',
  instagram: 'https://www.instagram.com/bear_27earl',
};

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
