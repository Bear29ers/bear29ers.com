import Curve from './Curve';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Curve> = {
  component: Curve,
};

export default meta;

type Story = StoryObj<typeof Curve>;

export const Default: Story = {
  render: () => <Curve />,
};
