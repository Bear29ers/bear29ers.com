import Tbd from './Tbd';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Tbd> = {
  component: Tbd,
};

export default meta;

type Story = StoryObj<typeof Tbd>;

export const W5_12: Story = {
  render: () => <Tbd width="w-5/12" />,
};

export const W7_12: Story = {
  render: () => <Tbd width="w-7/12" />,
};
