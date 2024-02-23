import type { StaticImageData } from 'next/image';

export interface ProfileText {
  fullName: string;
  userName: string;
  greeting: string;
  shortGreeting: string;
  title: string;
  biographyList: {
    id: number;
    text: string;
  }[];
  organization: string;
  location: string;
  website: string;
  githubStats: string;
}

export interface Achievement {
  id: number;
  alt: string;
  src: StaticImageData;
}
