import InstagramIcon from './InstagramIcon';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof InstagramIcon> = {
  component: InstagramIcon,
};

export default meta;

type Story = StoryObj<typeof InstagramIcon>;

export const Standard: Story = {
  render: () => <InstagramIcon />,
};

export const W20: Story = {
  render: () => (
    <div className="w-20">
      <InstagramIcon />
    </div>
  ),
};
