import {
  AWSIcon,
  AfterEffectsIcon,
  AppleIcon,
  AtomIcon,
  BabelIcon,
  BashIcon,
  BootstrapIcon,
  CSSIcon,
  CodepenIcon,
  DiscordIcon,
  DockerIcon,
  EmotionIcon,
  ExpressIcon,
  FigmaIcon,
  FirebaseIcon,
  GitHubActionsIcon,
  GitHubIcon,
  GitIcon,
  HTMLIcon,
  IllustratorIcon,
  JQueryIcon,
  JavaScriptIcon,
  JestIcon,
  LaravelIcon,
  LinuxIcon,
  LuaIcon,
  MarkdownIcon,
  MaterialUIIcon,
  MySQLIcon,
  NeovimIcon,
  NextJsIcon,
  NodeJsIcon,
  NpmIcon,
  NuxtJsIcon,
  PHPIcon,
  PhotoshopIcon,
  PiniaIcon,
  PnpmIcon,
  PostmanIcon,
  PremiereProIcon,
  ReactIcon,
  RegexIcon,
  SQLiteIcon,
  SVGIcon,
  SassIcon,
  SentryIcon,
  StackOverflowIcon,
  StyledComponentsIcon,
  TailwindCSSIcon,
  ThreeJsIcon,
  TypeScriptIcon,
  VSCodeIcon,
  VercelIcon,
  VimIcon,
  ViteIcon,
  VitestIcon,
  VueJsIcon,
  WebStormIcon,
  WebpackIcon,
  XDIcon,
} from '@/components/icons/SkillIcons/SkillIcons';

import type { SkillIcons } from '@/types/skillIcons';

export const ICON_SIZE_LG: number = 60;
export const ICON_SIZE_SM: number = 50;

export const ICON_GAP_LG: number = 15;
export const ICON_GAP_SM: number = 8;

export const SKILL_ICONS_LG: SkillIcons[] = [
  {
    row: 1,
    icons: [
      { column: 1, component: HTMLIcon },
      { column: 2, component: CSSIcon },
      { column: 3, component: SassIcon },
      { column: 4, component: BootstrapIcon },
      { column: 5, component: TailwindCSSIcon },
      { column: 6, component: JavaScriptIcon },
      { column: 7, component: TypeScriptIcon },
      { column: 8, component: JQueryIcon },
      { column: 9, component: ThreeJsIcon },
      { column: 10, component: ReactIcon },
    ],
  },
  {
    row: 2,
    icons: [
      { column: 1, component: StyledComponentsIcon },
      { column: 2, component: EmotionIcon },
      { column: 3, component: MaterialUIIcon },
      { column: 4, component: NextJsIcon },
      { column: 5, component: VercelIcon },
      { column: 6, component: VueJsIcon },
      { column: 7, component: NuxtJsIcon },
      { column: 8, component: PiniaIcon },
      { column: 9, component: NodeJsIcon },
      { column: 10, component: ExpressIcon },
    ],
  },
  {
    row: 3,
    icons: [
      { column: 1, component: WebpackIcon },
      { column: 2, component: ViteIcon },
      { column: 3, component: JestIcon },
      { column: 4, component: VitestIcon },
      { column: 5, component: BabelIcon },
      { column: 6, component: RegexIcon },
      { column: 7, component: NpmIcon },
      { column: 8, component: PnpmIcon },
      { column: 9, component: PHPIcon },
      { column: 10, component: LaravelIcon },
    ],
  },
  {
    row: 4,
    icons: [
      { column: 1, component: MySQLIcon },
      { column: 2, component: SQLiteIcon },
      { column: 3, component: DockerIcon },
      { column: 4, component: GitIcon },
      { column: 5, component: GitHubIcon },
      { column: 6, component: GitHubActionsIcon },
      { column: 7, component: AWSIcon },
      { column: 8, component: FirebaseIcon },
      { column: 9, component: VimIcon },
      { column: 10, component: NeovimIcon },
    ],
  },
  {
    row: 5,
    icons: [
      { column: 1, component: LinuxIcon },
      { column: 2, component: BashIcon },
      { column: 3, component: LuaIcon },
      { column: 4, component: MarkdownIcon },
      { column: 5, component: SVGIcon },
      { column: 6, component: WebStormIcon },
      { column: 7, component: VSCodeIcon },
      { column: 8, component: AtomIcon },
      { column: 9, component: FigmaIcon },
      { column: 10, component: XDIcon },
    ],
  },
  {
    row: 6,
    icons: [
      { column: 1, component: PhotoshopIcon },
      { column: 2, component: IllustratorIcon },
      { column: 3, component: PremiereProIcon },
      { column: 4, component: AfterEffectsIcon },
      { column: 5, component: PostmanIcon },
      { column: 6, component: SentryIcon },
      { column: 7, component: CodepenIcon },
      { column: 8, component: StackOverflowIcon },
      { column: 9, component: DiscordIcon },
      { column: 10, component: AppleIcon },
    ],
  },
];

export const SKILL_ICONS_MD: SkillIcons[] = [
  {
    row: 1,
    icons: [
      { column: 1, component: HTMLIcon },
      { column: 2, component: CSSIcon },
      { column: 3, component: SassIcon },
      { column: 4, component: BootstrapIcon },
      { column: 5, component: TailwindCSSIcon },
      { column: 6, component: JavaScriptIcon },
    ],
  },
  {
    row: 2,
    icons: [
      { column: 1, component: TypeScriptIcon },
      { column: 2, component: JQueryIcon },
      { column: 3, component: ThreeJsIcon },
      { column: 4, component: ReactIcon },
      { column: 5, component: StyledComponentsIcon },
      { column: 6, component: EmotionIcon },
    ],
  },
  {
    row: 3,
    icons: [
      { column: 1, component: MaterialUIIcon },
      { column: 2, component: NextJsIcon },
      { column: 3, component: VercelIcon },
      { column: 4, component: VueJsIcon },
      { column: 5, component: NuxtJsIcon },
      { column: 6, component: PiniaIcon },
    ],
  },
  {
    row: 4,
    icons: [
      { column: 1, component: NodeJsIcon },
      { column: 2, component: ExpressIcon },
      { column: 3, component: WebpackIcon },
      { column: 4, component: ViteIcon },
      { column: 5, component: JestIcon },
      { column: 6, component: VitestIcon },
    ],
  },
  {
    row: 5,
    icons: [
      { column: 1, component: BabelIcon },
      { column: 2, component: RegexIcon },
      { column: 3, component: NpmIcon },
      { column: 4, component: PnpmIcon },
      { column: 5, component: PHPIcon },
      { column: 6, component: LaravelIcon },
    ],
  },
  {
    row: 6,
    icons: [
      { column: 1, component: MySQLIcon },
      { column: 2, component: SQLiteIcon },
      { column: 3, component: DockerIcon },
      { column: 4, component: GitIcon },
      { column: 5, component: GitHubIcon },
      { column: 6, component: GitHubActionsIcon },
    ],
  },
  {
    row: 7,
    icons: [
      { column: 1, component: AWSIcon },
      { column: 2, component: FirebaseIcon },
      { column: 3, component: VimIcon },
      { column: 4, component: NeovimIcon },
      { column: 5, component: LinuxIcon },
      { column: 6, component: BashIcon },
    ],
  },
  {
    row: 8,
    icons: [
      { column: 1, component: LuaIcon },
      { column: 2, component: MarkdownIcon },
      { column: 3, component: SVGIcon },
      { column: 4, component: WebStormIcon },
      { column: 5, component: VSCodeIcon },
      { column: 6, component: AtomIcon },
    ],
  },
  {
    row: 9,
    icons: [
      { column: 1, component: FigmaIcon },
      { column: 2, component: XDIcon },
      { column: 3, component: PhotoshopIcon },
      { column: 4, component: IllustratorIcon },
      { column: 5, component: PremiereProIcon },
      { column: 6, component: AfterEffectsIcon },
    ],
  },
  {
    row: 10,
    icons: [
      { column: 1, component: PostmanIcon },
      { column: 2, component: SentryIcon },
      { column: 3, component: CodepenIcon },
      { column: 4, component: StackOverflowIcon },
      { column: 5, component: DiscordIcon },
      { column: 6, component: AppleIcon },
    ],
  },
];

export const SKILL_ICONS_SM: SkillIcons[] = [
  {
    row: 1,
    icons: [
      { column: 1, component: HTMLIcon },
      { column: 2, component: CSSIcon },
      { column: 3, component: SassIcon },
      { column: 4, component: BootstrapIcon },
      { column: 5, component: TailwindCSSIcon },
    ],
  },
  {
    row: 2,
    icons: [
      { column: 1, component: JavaScriptIcon },
      { column: 2, component: TypeScriptIcon },
      { column: 3, component: JQueryIcon },
      { column: 4, component: ThreeJsIcon },
      { column: 5, component: ReactIcon },
    ],
  },
  {
    row: 3,
    icons: [
      { column: 1, component: StyledComponentsIcon },
      { column: 2, component: EmotionIcon },
      { column: 3, component: MaterialUIIcon },
      { column: 4, component: NextJsIcon },
      { column: 5, component: VercelIcon },
    ],
  },
  {
    row: 4,
    icons: [
      { column: 1, component: VueJsIcon },
      { column: 2, component: NuxtJsIcon },
      { column: 3, component: PiniaIcon },
      { column: 4, component: NodeJsIcon },
      { column: 5, component: ExpressIcon },
    ],
  },
  {
    row: 5,
    icons: [
      { column: 1, component: WebpackIcon },
      { column: 2, component: ViteIcon },
      { column: 3, component: JestIcon },
      { column: 4, component: VitestIcon },
      { column: 5, component: BabelIcon },
    ],
  },
  {
    row: 6,
    icons: [
      { column: 1, component: RegexIcon },
      { column: 2, component: NpmIcon },
      { column: 3, component: PnpmIcon },
      { column: 4, component: PHPIcon },
      { column: 5, component: LaravelIcon },
    ],
  },
  {
    row: 7,
    icons: [
      { column: 1, component: MySQLIcon },
      { column: 2, component: SQLiteIcon },
      { column: 3, component: DockerIcon },
      { column: 4, component: GitIcon },
      { column: 5, component: GitHubIcon },
    ],
  },
  {
    row: 8,
    icons: [
      { column: 1, component: GitHubActionsIcon },
      { column: 2, component: AWSIcon },
      { column: 3, component: FirebaseIcon },
      { column: 4, component: VimIcon },
      { column: 5, component: NeovimIcon },
    ],
  },
  {
    row: 9,
    icons: [
      { column: 1, component: LinuxIcon },
      { column: 2, component: BashIcon },
      { column: 3, component: LuaIcon },
      { column: 4, component: MarkdownIcon },
      { column: 5, component: SVGIcon },
    ],
  },
  {
    row: 10,
    icons: [
      { column: 1, component: WebStormIcon },
      { column: 2, component: VSCodeIcon },
      { column: 3, component: AtomIcon },
      { column: 4, component: FigmaIcon },
      { column: 5, component: XDIcon },
    ],
  },
  {
    row: 11,
    icons: [
      { column: 1, component: PhotoshopIcon },
      { column: 2, component: IllustratorIcon },
      { column: 3, component: PremiereProIcon },
      { column: 4, component: AfterEffectsIcon },
      { column: 5, component: PostmanIcon },
    ],
  },
  {
    row: 12,
    icons: [
      { column: 1, component: SentryIcon },
      { column: 2, component: CodepenIcon },
      { column: 3, component: StackOverflowIcon },
      { column: 4, component: DiscordIcon },
      { column: 5, component: AppleIcon },
    ],
  },
];
