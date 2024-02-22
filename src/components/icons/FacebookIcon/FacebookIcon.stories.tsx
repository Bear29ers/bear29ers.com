import FacebookIcon from './FacebookIcon';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof FacebookIcon> = {
  component: FacebookIcon,
};

export default meta;

type Story = StoryObj<typeof FacebookIcon>;

export const Default: Story = {
  render: () => {
    return (
      <div className="w-40">
        <FacebookIcon />
      </div>
    );
  },
};
