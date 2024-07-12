import FanningItem from './FanningItem';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof FanningItem> = {
  component: FanningItem,
};

export default meta;

type Story = StoryObj<typeof FanningItem>;

export const Default: Story = {
  render: () => <FanningItem />,
};
