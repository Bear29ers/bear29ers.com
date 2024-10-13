import Menu from './Menu';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Menu> = {
  component: Menu,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Menu>;

export const Default: Story = {
  args: {
    pathname: '/about',
  },
  render: ({ pathname }) => <Menu pathname={pathname} />,
};
