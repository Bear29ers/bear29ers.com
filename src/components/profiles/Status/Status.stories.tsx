import Status from './Status';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Status> = {
  component: Status,
};

export default meta;

type Story = StoryObj<typeof Status>;

export const Default: Story = {
  render: () => {
    return (
      <div className="mx-auto w-full max-w-xs">
        <Status />
      </div>
    );
  },
};
