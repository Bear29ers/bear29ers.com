import ThreadsIcon from './ThreadsIcon';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ThreadsIcon> = {
  component: ThreadsIcon,
};

export default meta;

type Story = StoryObj<typeof ThreadsIcon>;

export const IsClickedTrue: Story = {
  render: () => <ThreadsIcon isClicked />,
};

export const IsClickedFalse: Story = {
  render: () => <ThreadsIcon isClicked={false} />,
};

export const W20IsClickedTrue: Story = {
  render: () => (
    <div className="w-20">
      <ThreadsIcon isClicked />
    </div>
  ),
};

export const W20IsClickedFalse: Story = {
  render: () => (
    <div className="w-20">
      <ThreadsIcon isClicked={false} />
    </div>
  ),
};
