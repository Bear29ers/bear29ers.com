import { OrganizationIcon, LocationIcon, WebsiteIcon } from '@/components/icons/ProfileIcons/ProfileIcons';

import type { Ambition, ProfileDetail, ProfileText, Team } from '@/types/about';

import bluejays from '~/images/teams/bluejays.png';
import dodgers from '~/images/teams/dodgers.png';
import giants from '~/images/teams/giants.png';
import yankees from '~/images/teams/yankees.png';

export const PROFILE_TEXT: ProfileText = {
  userName: 'Bear29ers',
  occupation: 'Frontend Developer & Designer',
  shortGreeting: "Hi, there, I'm Yuta",
  title: "I'm a front-end developer and designer!!",
  biographyList: [
    {
      id: 1,
      text: "Hi, I'm Yuta Okuma, a front-end developer and designer with a passion for creating beautiful, functional, and user-centered digital experiences.",
    },
    {
      id: 2,
      text: 'I played baseball for about 9 years as a child and my favorite teams are the Los Angeles Angeles and the New York Yankees.',
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
  githubStats: 'https://github-readme-stats-bear29ers.vercel.app/api?username=Bear29ers&show_icons=true&theme=bear',
};

export const PROFILE_DETAILS: ProfileDetail[] = [
  {
    type: 'organization',
    icon: OrganizationIcon,
  },
  {
    type: 'location',
    icon: LocationIcon,
  },
  {
    type: 'website',
    icon: WebsiteIcon,
  },
];

export const TEAMS: Team[] = [
  {
    id: 1,
    alt: 'Los Angeles Dodgers',
    src: dodgers,
  },
  {
    id: 2,
    alt: 'New York Yankees',
    src: yankees,
  },
  {
    id: 3,
    alt: 'Toronto Blue Jays',
    src: bluejays,
  },
  {
    id: 4,
    alt: 'Tokyo Yomiuri Giants',
    src: giants,
  },
];

export const AMBITIONS: Ambition[] = [
  {
    id: 1,
    text: '💻 Learn higher level of Next.js and master Three.js.',
  },
  {
    id: 2,
    text: '👬 Collaborate with other digital content creators.',
  },
  {
    id: 3,
    text: '📝 Obtain qualifications in several engineering fields',
  },
  {
    id: 4,
    text: '🏋🏻 Lose weight and stay healthy',
  },
];
