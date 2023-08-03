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
} from './SkillIcons';

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

export const BOOTSTRAP: Story = {
  render: () => <Bootstrap />,
};

export const TAILWIND: Story = {
  render: () => <Tailwind />,
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

export const THREEJS: Story = {
  render: () => <ThreeJs />,
};

export const REACT: Story = {
  render: () => <ReactJs />,
};

export const STYLED_COMPONENTS: Story = {
  render: () => <StyledComponents />,
};

export const EMOTION: Story = {
  render: () => <Emotion />,
};

export const MATERIAL_UI: Story = {
  render: () => <MaterialUi />,
};

export const NEXTJS: Story = {
  render: () => <NextJs />,
};

export const VERCEL: Story = {
  render: () => <Vercel />,
};

export const VUEJS: Story = {
  render: () => <VueJs />,
};

export const NUXTJS: Story = {
  render: () => <NuxtJs />,
};

export const VITE: Story = {
  render: () => <Vite />,
};

export const NODEJS: Story = {
  render: () => <NodeJs />,
};

export const EXPRESS: Story = {
  render: () => <Express />,
};

export const JEST: Story = {
  render: () => <Jest />,
};
