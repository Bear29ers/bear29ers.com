import ThreadsIcon from './ThreadsIcon';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ThreadsIcon> = {
  component: ThreadsIcon,
};

export default meta;

type Story = StoryObj<typeof ThreadsIcon>;

export const Default: Story = {
  args: {
    darkMode: false,
  },
  render: ({ darkMode }) => {
    return (
      <div className="w-40">
        <ThreadsIcon darkMode={darkMode} />
      </div>
    );
  },
};
