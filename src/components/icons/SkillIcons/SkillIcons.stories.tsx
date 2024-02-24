import {
  AWSIcon,
  AtomIcon,
  BabelIcon,
  BashIcon,
  BootstrapIcon,
  CSSIcon,
  DockerIcon,
  EmotionIcon,
  ExpressIcon,
  FigmaIcon,
  FirebaseIcon,
  GitHubActionsIcon,
  GitHubIcon,
  GitIcon,
  HTMLIcon,
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
  PiniaIcon,
  PnpmIcon,
  ReactIcon,
  RegexIcon,
  SQLiteIcon,
  SVGIcon,
  SassIcon,
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
} from './SkillIcons';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof HTMLIcon> = {
  component: HTMLIcon,
};

export default meta;

type Story = StoryObj<typeof HTMLIcon>;

export const Default: Story = {
  render: () => {
    return (
      <div className="flex flex-col gap-y-4">
        <div className="flex gap-x-4">
          <div className="w-24">
            <HTMLIcon />
          </div>
          <div className="w-24">
            <CSSIcon />
          </div>
          <div className="w-24">
            <SassIcon />
          </div>
          <div className="w-24">
            <BootstrapIcon />
          </div>
          <div className="w-24">
            <TailwindCSSIcon />
          </div>
          <div className="w-24">
            <JavaScriptIcon />
          </div>
          <div className="w-24">
            <TypeScriptIcon />
          </div>
          <div className="w-24">
            <JQueryIcon />
          </div>
          <div className="w-24">
            <ThreeJsIcon />
          </div>
          <div className="w-24">
            <ReactIcon />
          </div>
        </div>
        <div className="flex gap-x-4">
          <div className="w-24">
            <StyledComponentsIcon />
          </div>
          <div className="w-24">
            <EmotionIcon />
          </div>
          <div className="w-24">
            <MaterialUIIcon />
          </div>
          <div className="w-24">
            <NextJsIcon />
          </div>
          <div className="w-24">
            <VercelIcon />
          </div>
          <div className="w-24">
            <VueJsIcon />
          </div>
          <div className="w-24">
            <NuxtJsIcon />
          </div>
          <div className="w-24">
            <PiniaIcon />
          </div>
          <div className="w-24">
            <NodeJsIcon />
          </div>
          <div className="w-24">
            <ExpressIcon />
          </div>
        </div>
        <div className="flex gap-x-4">
          <div className="w-24">
            <WebpackIcon />
          </div>
          <div className="w-24">
            <ViteIcon />
          </div>
          <div className="w-24">
            <JestIcon />
          </div>
          <div className="w-24">
            <VitestIcon />
          </div>
          <div className="w-24">
            <BabelIcon />
          </div>
          <div className="w-24">
            <RegexIcon />
          </div>
          <div className="w-24">
            <NpmIcon />
          </div>
          <div className="w-24">
            <PnpmIcon />
          </div>
          <div className="w-24">
            <PHPIcon />
          </div>
          <div className="w-24">
            <LaravelIcon />
          </div>
        </div>
        <div className="flex gap-x-4">
          <div className="w-24">
            <MySQLIcon />
          </div>
          <div className="w-24">
            <SQLiteIcon />
          </div>
          <div className="w-24">
            <DockerIcon />
          </div>
          <div className="w-24">
            <GitIcon />
          </div>
          <div className="w-24">
            <GitHubIcon />
          </div>
          <div className="w-24">
            <GitHubActionsIcon />
          </div>
          <div className="w-24">
            <AWSIcon />
          </div>
          <div className="w-24">
            <FirebaseIcon />
          </div>
          <div className="w-24">
            <VimIcon />
          </div>
          <div className="w-24">
            <NeovimIcon />
          </div>
        </div>
        <div className="flex gap-x-4">
          <div className="w-24">
            <LinuxIcon />
          </div>
          <div className="w-24">
            <BashIcon />
          </div>
          <div className="w-24">
            <LuaIcon />
          </div>
          <div className="w-24">
            <MarkdownIcon />
          </div>
          <div className="w-24">
            <SVGIcon />
          </div>
          <div className="w-24">
            <WebStormIcon />
          </div>
          <div className="w-24">
            <VSCodeIcon />
          </div>
          <div className="w-24">
            <AtomIcon />
          </div>
          <div className="w-24">
            <FigmaIcon />
          </div>
          <div className="w-24">
            <XDIcon />
          </div>
        </div>
      </div>
    );
  },
};
