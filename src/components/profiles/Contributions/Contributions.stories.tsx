import Contributions from './Contributions';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Contributions> = {
  component: Contributions,
};

export default meta;

type Story = StoryObj<typeof Contributions>;

export const Default: Story = {
  render: () => {
    return (
      <div className="mx-auto w-full max-w-[960px]">
        <Contributions />
      </div>
    );
  },
};
