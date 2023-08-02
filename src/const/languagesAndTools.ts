import type { FC } from 'react';

import {
  Bootstrap,
  Css,
  Html,
  JavaScript,
  Sass,
  Tailwind,
  TypeScript,
} from '../components/Icons/SkillIcons/SkillIcons';

export type SkillIcon = {
  name: string;
  component: FC;
};

// ライトモード用アイコン
export const lightIcons: SkillIcon[][] = [
  [
    { name: 'HTML', component: Html },
    { name: 'CSS', component: Css },
    { name: 'Sass', component: Sass },
    { name: 'Bootstrap', component: Bootstrap },
    { name: 'Tailwind', component: Tailwind },
    { name: 'JavaScript', component: JavaScript },
    { name: 'TypeScript', component: TypeScript },
  ],
];

// アイコンサイズ
export const SIZE = 60;

// アイコン間のスペース
export const GAP = 15;
