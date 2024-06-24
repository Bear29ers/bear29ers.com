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
    classes: 'text-[48px] xs:text-[60px] xsm:text-[80px]',
  },
  render: ({ text, classes }) => {
    return <AnimatedText text={text} classes={classes} />;
  },
};
