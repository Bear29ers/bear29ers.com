import { HOME_TEXT } from '@/constants';

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

export const SixXl: Story = {
  render: () => <AnimatedText text={HOME_TEXT.title} className="!text-6xl" />,
};

export const FourXl: Story = {
  render: () => <AnimatedText text={HOME_TEXT.title} className="!text-4xl" />,
};

export const TwoXl: Story = {
  render: () => <AnimatedText text={HOME_TEXT.title} className="!text-2xl" />,
};
