import arcticCodeVault from '../../public/images/achievements/arctic-code-vault-contributor-default.png';
import pullShark from '../../public/images/achievements/pull-shark-default.png';
import quickdraw from '../../public/images/achievements/quickdraw-default--light.png';
import yolo from '../../public/images/achievements/yolo-default.png';

import type { StaticImageData } from 'next/image';

// Aboutページテキスト
export const PROFILE_TEXT = {
  fullName: 'Yuta Okuma',
  userName: 'Bear29ers',
  greeting: "Hi, there, I'm Yuta. Nice to see you!",
  shortGreeting: "Hi, there, I'm Yuta 🐻",
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
  githubStats: 'https://github-readme-stats-bear29ers.vercel.app/api?username=Bear29ers&show_icons=true&theme=bear',
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