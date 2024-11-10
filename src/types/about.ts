import type { FC } from 'react';

import type { StaticImageData } from 'next/image';

export interface ProfileText {
  userName: string;
  occupation: string;
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
  icon: FC;
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
