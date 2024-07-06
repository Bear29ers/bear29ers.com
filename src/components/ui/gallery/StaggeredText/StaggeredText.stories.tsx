import StaggeredText from './StaggeredText';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof StaggeredText> = {
  component: StaggeredText,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof StaggeredText>;

export const Default: Story = {
  args: {
    textList: ['sample', 'text', 'list'],
  },
  render: ({ textList }) => {
    return <StaggeredText textList={textList} />;
  },
};
