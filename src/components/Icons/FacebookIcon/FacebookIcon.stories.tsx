import FacebookIcon from './FacebookIcon';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof FacebookIcon> = {
  component: FacebookIcon,
};

export default meta;

type Story = StoryObj<typeof FacebookIcon>;

export const Standard: Story = {
  render: (args) => <FacebookIcon {...args} />,
  args: {
    className: '',
  },
};

export const W20: Story = {
  render: (args) => <FacebookIcon {...args} />,
  args: {
    className: '!w-20',
  },
};
