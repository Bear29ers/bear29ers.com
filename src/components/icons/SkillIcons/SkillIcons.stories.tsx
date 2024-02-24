import {
  BootstrapIcon,
  CSSIcon,
  HTMLIcon,
  JQueryIcon,
  JavaScriptIcon,
  ReactIcon,
  SassIcon,
  TailwindCSSIcon,
  ThreeJsIcon,
  TypeScriptIcon,
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
      </div>
    );
  },
};
