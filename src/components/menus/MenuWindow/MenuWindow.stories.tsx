import MenuWindow from './MenuWindow';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof MenuWindow> = {
  component: MenuWindow,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof MenuWindow>;

export const Default: Story = {
  args: {
    isOpen: false,
  },
  render: ({ isOpen }) => {
    return (
      <div className="flex-center h-screen w-screen">
        <MenuWindow isOpen={isOpen} />
      </div>
    );
  },
};
