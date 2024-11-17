import { OrganizationIcon, LocationIcon, WebsiteIcon } from '@/components/icons/ProfileIcons/ProfileIcons';

import type { Ambition, ProfileDetail, Team } from '@/types/about';

import bluejays from '~/images/teams/bluejays.png';
import dodgers from '~/images/teams/dodgers.png';
import giants from '~/images/teams/giants.png';
import yankees from '~/images/teams/yankees.png';

export const PROFILE_TEXT = {
  userName: 'Bear29ers',
  occupation: 'Frontend Developer & Designer',
  paragraphList: [
    {
      id: 1,
      text: 'first',
    },
    {
      id: 2,
      text: 'second',
    },
    {
      id: 3,
      text: 'third',
    },
    {
      id: 4,
      text: 'fourth',
    },
    {
      id: 5,
      text: 'fifth',
    },
    {
      id: 6,
      text: 'sixth',
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
