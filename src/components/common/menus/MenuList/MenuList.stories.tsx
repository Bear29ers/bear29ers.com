import MenuList from './MenuList';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof MenuList> = {
  component: MenuList,
};

export default meta;

type Story = StoryObj<typeof MenuList>;

export const Default: Story = {
  render: () => {
    return (
      <div className="relative h-[650px] w-[500px] rounded-3xl bg-dark">
        <MenuList />
      </div>
    );
  },
};
