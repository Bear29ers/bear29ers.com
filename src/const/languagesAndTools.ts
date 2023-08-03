import type { FC } from 'react';

import {
  Bootstrap,
  Css,
  Emotion,
  Express,
  Html,
  JQuery,
  JavaScript,
  Jest,
  MaterialUi,
  NextJs,
  NodeJs,
  NuxtJs,
  ReactJs,
  Sass,
  StyledComponents,
  Tailwind,
  ThreeJs,
  TypeScript,
  Vercel,
  Vite,
  VueJs,
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
  [
    { name: 'jQuery', component: JQuery },
    { name: 'threejs', component: ThreeJs },
    { name: 'React', component: ReactJs },
    { name: 'styled-components', component: StyledComponents },
    { name: 'Emotion', component: Emotion },
    { name: 'Material UI', component: MaterialUi },
    { name: 'Next.js', component: NextJs },
  ],
  [
    { name: 'Vercel', component: Vercel },
    { name: 'Vue.js', component: VueJs },
    { name: 'Nuxt.js', component: NuxtJs },
    { name: 'Vite', component: Vite },
    { name: 'Node.js', component: NodeJs },
    { name: 'Express', component: Express },
    { name: 'Jest', component: Jest },
  ],
];

// アイコンサイズ
export const SIZE = 60;

// アイコン間のスペース
export const GAP = 15;
