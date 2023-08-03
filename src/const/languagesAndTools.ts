import type { FC } from 'react';

import {
  AfterEffects,
  Atom,
  Aws,
  Babel,
  Bash,
  Bootstrap,
  Codepen,
  Css,
  Discord,
  Docker,
  Emotion,
  Express,
  Figma,
  Firebase,
  Gcp,
  Git,
  GitHub,
  GitHubActions,
  Html,
  Idea,
  Illustrator,
  JQuery,
  JavaScript,
  Jest,
  Laravel,
  Linux,
  Lua,
  Markdown,
  MaterialUi,
  MySql,
  Neovim,
  NextJs,
  NodeJs,
  NuxtJs,
  Photoshop,
  Php,
  Postman,
  PremierePro,
  ReactJs,
  Regex,
  Sass,
  Sentry,
  Sqlite,
  StackOverflow,
  StyledComponents,
  Svg,
  Tailwind,
  ThreeJs,
  TypeScript,
  Vercel,
  Vim,
  Vite,
  Vscode,
  VueJs,
  Webpack,
  Xd,
} from '../components/Icons/SkillIcons/SkillIcons';

export type SkillIcon = {
  component: FC;
};

// スキルアイコンリスト
export const SKILL_ICONS: SkillIcon[][] = [
  // 1列目
  [
    { component: Html },
    { component: Css },
    { component: Sass },
    { component: Bootstrap },
    { component: Tailwind },
    { component: JavaScript },
    { component: TypeScript },
  ],
  // 2列目
  [
    { component: JQuery },
    { component: ThreeJs },
    { component: ReactJs },
    { component: StyledComponents },
    { component: Emotion },
    { component: MaterialUi },
    { component: NextJs },
  ],
  // 3列目
  [
    { component: Vercel },
    { component: VueJs },
    { component: NuxtJs },
    { component: Vite },
    { component: NodeJs },
    { component: Express },
    { component: Jest },
  ],
  // 4列目
  [
    { component: Regex },
    { component: Webpack },
    { component: Babel },
    { component: Php },
    { component: Laravel },
    { component: MySql },
    { component: Sqlite },
  ],
  // 5列目
  [
    { component: Docker },
    { component: Git },
    { component: GitHub },
    { component: GitHubActions },
    { component: Aws },
    { component: Gcp },
    { component: Firebase },
  ],
  // 6列目
  [
    { component: Vim },
    { component: Neovim },
    { component: Linux },
    { component: Bash },
    { component: Lua },
    { component: Markdown },
    { component: Svg },
  ],
  // 7列目
  [
    { component: Idea },
    { component: Vscode },
    { component: Atom },
    { component: Figma },
    { component: Xd },
    { component: Photoshop },
    { component: Illustrator },
  ],
  // 8列目
  [
    { component: PremierePro },
    { component: AfterEffects },
    { component: Postman },
    { component: Sentry },
    { component: Codepen },
    { component: StackOverflow },
    { component: Discord },
  ],
];

// アイコンサイズ
export const ICON_SIZE = 60;

// アイコン間のスペース
export const ICON_GAP = 15;
