import { JapanIcon, USIcon } from './InternationalIcons';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof JapanIcon> = {
  component: JapanIcon,
};

export default meta;

type Story = StoryObj<typeof JapanIcon>;

export const Default: Story = {
  render: () => {
    return (
      <div className="flex h-screen w-screen gap-10 bg-dark p-4">
        <div className="w-40">
          <USIcon />
        </div>
        <div className="w-40">
          <JapanIcon />
        </div>
      </div>
    );
  },
};
