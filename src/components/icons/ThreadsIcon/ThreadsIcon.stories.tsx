import ThreadsIcon from './ThreadsIcon';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ThreadsIcon> = {
  component: ThreadsIcon,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ThreadsIcon>;

export const Default: Story = {
  args: {
    lightMode: false,
  },
  render: ({ lightMode }) => {
    return (
      <div className="w-40">
        <ThreadsIcon lightMode={lightMode} />
      </div>
    );
  },
};
