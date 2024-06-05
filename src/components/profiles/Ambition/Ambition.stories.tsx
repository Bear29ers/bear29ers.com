import Ambition from './Ambition';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Ambition> = {
  component: Ambition,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Ambition>;

export const Default: Story = {
  render: () => {
    return (
      <div className="mx-auto w-full max-w-[960px]">
        <Ambition />
      </div>
    );
  },
};
