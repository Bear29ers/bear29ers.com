import AnimatedText from './AnimatedText';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof AnimatedText> = {
  component: AnimatedText,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof AnimatedText>;

export const Default: Story = {
  args: {
    text: 'Sample',
  },
  render: ({ text }) => {
    return <AnimatedText text={text} />;
  },
};
