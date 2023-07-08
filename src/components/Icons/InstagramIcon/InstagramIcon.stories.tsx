import InstagramIcon from './InstagramIcon';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof InstagramIcon> = {
  component: InstagramIcon,
};

export default meta;

type Story = StoryObj<typeof InstagramIcon>;

export const Standard: Story = {
  render: (args) => <InstagramIcon {...args} />,
  args: {
    className: '',
  },
};

export const W20: Story = {
  render: (args) => <InstagramIcon {...args} />,
  args: {
    className: '!w-20',
  },
};
