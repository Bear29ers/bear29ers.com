import ProfileCard from './ProfileCard';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ProfileCard> = {
  component: ProfileCard,
};

export default meta;

type Story = StoryObj<typeof ProfileCard>;

export const Standard: Story = {
  render: () => (
    <div className="w-96">
      <ProfileCard />
    </div>
  ),
};
