import Stats from './Stats';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Stats> = {
  component: Stats,
};

export default meta;

type Story = StoryObj<typeof Stats>;

export const Default: Story = {
  render: () => {
    return (
      <div className="mx-auto w-full max-w-[960px]">
        <Stats />
      </div>
    );
  },
};
