import MenuIcon from './MenuIcon';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof MenuIcon> = {
  component: MenuIcon,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof MenuIcon>;

export const Default: Story = {
  args: {
    isOpen: false,
    setIsOpen: () => {},
  },
  render: ({ isOpen, setIsOpen }) => {
    return (
      <div className="flex-center h-screen w-screen">
        <MenuIcon isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    );
  },
};
