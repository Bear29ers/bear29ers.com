import ThreadsIcon from './ThreadsIcon';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ThreadsIcon> = {
  component: ThreadsIcon,
};

export default meta;

type Story = StoryObj<typeof ThreadsIcon>;

export const Default: Story = {
  args: {
    isClicked: false,
  },
  render: ({ isClicked }) => {
    return (
      <div className="w-40">
        <ThreadsIcon isClicked={isClicked} />
      </div>
    );
  },
};
