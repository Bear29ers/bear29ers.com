import InstagramIcon from './InstagramIcon';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof InstagramIcon> = {
  component: InstagramIcon,
};

export default meta;

type Story = StoryObj<typeof InstagramIcon>;

export const Default: Story = {
  render: () => {
    return (
      <div className="w-40">
        <InstagramIcon />
      </div>
    );
  },
};
