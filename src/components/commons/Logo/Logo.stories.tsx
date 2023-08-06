import Logo from './Logo';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Logo> = {
  component: Logo,
};

export default meta;

type Story = StoryObj<typeof Logo>;

export const Standard: Story = {
  render: () => <Logo />,
};
