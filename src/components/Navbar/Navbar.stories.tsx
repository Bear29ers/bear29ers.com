import Navbar from './Navbar';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Navbar> = {
  component: Navbar,
};

export default meta;

type Story = StoryObj<typeof Navbar>;

export const Standard: Story = {
  render: () => <Navbar />,
};
