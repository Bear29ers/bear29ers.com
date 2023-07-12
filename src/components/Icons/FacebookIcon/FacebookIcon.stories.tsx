import FacebookIcon from './FacebookIcon';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof FacebookIcon> = {
  component: FacebookIcon,
};

export default meta;

type Story = StoryObj<typeof FacebookIcon>;

export const Standard: Story = {
  render: () => <FacebookIcon />,
};

export const W20: Story = {
  render: () => (
    <div className="w-20">
      <FacebookIcon />
    </div>
  ),
};
