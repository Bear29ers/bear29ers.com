import Caption from './Caption';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Caption> = {
  component: Caption,
};

export default meta;

type Story = StoryObj<typeof Caption>;

export const Default: Story = {
  render: () => <Caption />,
};
