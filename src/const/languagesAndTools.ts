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

// ライトモード用アイコン
export const lightIcons: FC[][] = [[Html, Css, Sass, Tailwind, Bootstrap, JavaScript, TypeScript]];

// ダークモード用アイコン
export const darkIcons = [
  [0, 1, 2, 3],
  [4, 5, 6, 7],
  [8, 9, 10, 11],
  [12, 13, 14, 15],
];

// アイコンサイズ
export const SIZE = 60;

// アイコン間のスペース
export const GAP = 15;
