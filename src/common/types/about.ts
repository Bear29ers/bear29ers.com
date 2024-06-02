import type { FC } from 'react';

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
  githubStats: string;
}

export interface ProfileDetail {
  type: string;
  content: string;
  icon: FC;
}

export interface Achievement {
  id: number;
  alt: string;
  src: StaticImageData;
}

export interface Team {
  id: number;
  alt: string;
  src: StaticImageData;
}

export interface Ambition {
  id: number;
  text: string;
}
