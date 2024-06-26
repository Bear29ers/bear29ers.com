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
    isMobile: false,
  },
  render: ({ isOpen, isMobile }) => {
    return (
      <div className="flex-center h-screen w-screen">
        <MenuWindow isOpen={isOpen} isMobile={isMobile} />
      </div>
    );
  },
};
