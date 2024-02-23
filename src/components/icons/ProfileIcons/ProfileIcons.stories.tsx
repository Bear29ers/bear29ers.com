import ProfileIcons from './ProfileIcons';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ProfileIcons> = {
  component: ProfileIcons,
};

export default meta;

type Story = StoryObj<typeof ProfileIcons>;

export const Default: Story = {
  render: () => <ProfileIcons />,
};
