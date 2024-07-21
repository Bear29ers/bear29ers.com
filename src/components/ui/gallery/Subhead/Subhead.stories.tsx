import Subhead from './Subhead';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Subhead> = {
  component: Subhead,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Subhead>;

export const Default: Story = {
  args: { text: 'subhead text' },
  render: ({ text }) => {
    return <Subhead text={text} />;
  },
};
