import NavIcon from './NavIcon';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof NavIcon> = {
  component: NavIcon,
};

export default meta;

type Story = StoryObj<typeof NavIcon>;

export const Default: Story = {
  render: () => <NavIcon />,
};
