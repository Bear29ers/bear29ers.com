import { HOME_TEXT } from '../../../constants/home';

import AnimatedText from './AnimatedText';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof AnimatedText> = {
  component: AnimatedText,
};

export default meta;

type Story = StoryObj<typeof AnimatedText>;

export const Home: Story = {
  render: () => <AnimatedText text={HOME_TEXT.title} className="" />,
};

export const Text6Xl: Story = {
  render: () => <AnimatedText text={HOME_TEXT.title} className="!text-6xl" />,
};

export const Text4Xl: Story = {
  render: () => <AnimatedText text={HOME_TEXT.title} className="!text-4xl" />,
};

export const Text2Xl: Story = {
  render: () => <AnimatedText text={HOME_TEXT.title} className="!text-2xl" />,
};
