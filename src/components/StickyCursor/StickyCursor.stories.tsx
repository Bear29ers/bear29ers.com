import StickyCursor from './StickyCursor';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof StickyCursor> = {
  component: StickyCursor,
};

export default meta;

type Story = StoryObj<typeof StickyCursor>;

export const Default: Story = {
  render: () => <StickyCursor />,
};
