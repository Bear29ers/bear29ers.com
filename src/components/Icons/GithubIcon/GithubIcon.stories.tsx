import GithubIcon from './GithubIcon';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof GithubIcon> = {
  component: GithubIcon,
};

export default meta;

type Story = StoryObj<typeof GithubIcon>;

export const Standard: Story = {
  render: (args) => <GithubIcon {...args} />,
  args: {
    className: '',
  },
};

export const W20: Story = {
  render: (args) => <GithubIcon {...args} />,
  args: {
    className: '!w-20 !h-20',
  },
};
