import AnimatedText from './AnimatedText';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof AnimatedText> = {
  component: AnimatedText,
};

export default meta;

type Story = StoryObj<typeof AnimatedText>;

export const Standard: Story = {
  render: () => <AnimatedText />,
};
