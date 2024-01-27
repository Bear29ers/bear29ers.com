import MenuIcon from './MenuIcon';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof MenuIcon> = {
  component: MenuIcon,
};

export default meta;

type Story = StoryObj<typeof MenuIcon>;

export const Standard: Story = {
  render: () => <MenuIcon />,
};
