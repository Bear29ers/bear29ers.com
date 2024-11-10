import JapanIcon from './JapanIcon';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof JapanIcon> = {
  component: JapanIcon,
};

export default meta;

type Story = StoryObj<typeof JapanIcon>;

export const Default: Story = {
  render: () => <JapanIcon />,
};
