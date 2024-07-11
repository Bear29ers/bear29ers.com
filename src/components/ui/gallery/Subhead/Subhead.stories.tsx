import Subhead from './Subhead';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Subhead> = {
  component: Subhead,
};

export default meta;

type Story = StoryObj<typeof Subhead>;

export const Default: Story = {
  render: () => <Subhead />,
};
