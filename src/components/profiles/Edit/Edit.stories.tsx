import Edit from './Edit';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Edit> = {
  component: Edit,
};

export default meta;

type Story = StoryObj<typeof Edit>;

export const Default: Story = {
  render: () => {
    return (
      <div className="mx-auto w-full max-w-[960px]">
        <Edit />
      </div>
    );
  },
};
