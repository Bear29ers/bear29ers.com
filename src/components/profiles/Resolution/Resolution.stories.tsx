import Resolution from './Resolution';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Resolution> = {
  component: Resolution,
};

export default meta;

type Story = StoryObj<typeof Resolution>;

export const Default: Story = {
  render: () => {
    return (
      <div className="mx-auto w-full max-w-[960px]">
        <Resolution />
      </div>
    );
  },
};
