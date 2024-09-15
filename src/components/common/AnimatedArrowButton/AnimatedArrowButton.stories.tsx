import AnimatedArrowButton from './AnimatedArrowButton';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof AnimatedArrowButton> = {
  component: AnimatedArrowButton,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof AnimatedArrowButton>;

export const Default: Story = {
  args: {
    url: '/gallery?intro=skipped',
    text: 'Back to Gallery',
  },
  render: ({ url, text }) => {
    return <AnimatedArrowButton url={url} text={text} />;
  },
};
