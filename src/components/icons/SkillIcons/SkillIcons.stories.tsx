import {
  BootstrapIcon,
  CSSIcon,
  EmotionIcon,
  ExpressIcon,
  HTMLIcon,
  JQueryIcon,
  JavaScriptIcon,
  MaterialUIIcon,
  NextJsIcon,
  NodeJsIcon,
  NuxtJsIcon,
  PiniaIcon,
  ReactIcon,
  SassIcon,
  StyledComponentsIcon,
  TailwindCSSIcon,
  ThreeJsIcon,
  TypeScriptIcon,
  VercelIcon,
  VueJsIcon,
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
      </div>
    );
  },
};
