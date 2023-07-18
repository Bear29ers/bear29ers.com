import Profile from './Profile';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Profile> = {
  component: Profile,
};

export default meta;

type Story = StoryObj<typeof Profile>;

export const Standard: Story = {
  render: () => <Profile />,
};
