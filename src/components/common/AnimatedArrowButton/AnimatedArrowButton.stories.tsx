import AnimatedArrowButton from './AnimatedArrowButton';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof AnimatedArrowButton> = {
  component: AnimatedArrowButton,
};

export default meta;

type Story = StoryObj<typeof AnimatedArrowButton>;

export const Default: Story = {
  render: () => <AnimatedArrowButton />,
};
