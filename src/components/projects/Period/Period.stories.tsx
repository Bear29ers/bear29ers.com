import Period from './Period';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Period> = {
  component: Period,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Period>;

export const Default: Story = {
  args: { startAt: '2022', endAt: 'current' },
  render: ({ startAt, endAt }) => {
    return <Period startAt={startAt} endAt={endAt} />;
  },
};
