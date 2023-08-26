import type { FC } from 'react';

import FacebookIcon from '../components/Icons/FacebookIcon/FacebookIcon';
import GithubIcon from '../components/Icons/GithubIcon/GithubIcon';
import InstagramIcon from '../components/Icons/InstagramIcon/InstagramIcon';
import ThreadsIcon from '../components/Icons/ThreadsIcon/ThreadsIcon';

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
