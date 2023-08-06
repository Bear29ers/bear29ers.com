import ThreadsIcon from './ThreadsIcon';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ThreadsIcon> = {
  component: ThreadsIcon,
};

export default meta;

type Story = StoryObj<typeof ThreadsIcon>;

export const Standard: Story = {
  render: () => <ThreadsIcon />,
};

export const W20: Story = {
  render: () => (
    <div className="w-20">
      <ThreadsIcon />
    </div>
  ),
};
