import FanningImages from './FanningImages';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof FanningImages> = {
  component: FanningImages,
};

export default meta;

type Story = StoryObj<typeof FanningImages>;

export const Default: Story = {
  render: () => <FanningImages />,
};
