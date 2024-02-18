import MenuList from './MenuList';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof MenuList> = {
  component: MenuList,
};

export default meta;

type Story = StoryObj<typeof MenuList>;

export const Standard: Story = {
  render: () => <MenuList />,
};
