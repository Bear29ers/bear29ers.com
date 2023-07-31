import { Bootstrap, Css, Html, JQuery, JavaScript, Sass, Tailwind, TypeScript } from './SkillIcons';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Html> = {
  component: Html,
};

export default meta;

type Story = StoryObj<typeof Html>;

export const HTML: Story = {
  render: () => <Html />,
};

export const CSS: Story = {
  render: () => <Css />,
};

export const SASS: Story = {
  render: () => <Sass />,
};

export const TAILWIND: Story = {
  render: () => <Tailwind />,
};

export const BOOTSTRAP: Story = {
  render: () => <Bootstrap />,
};

export const JAVASCRIPT: Story = {
  render: () => <JavaScript />,
};

export const TYPESCRIPT: Story = {
  render: () => <TypeScript />,
};

export const JQUERY: Story = {
  render: () => <JQuery />,
};
