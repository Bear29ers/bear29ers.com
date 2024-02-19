import Bear from './Bear';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Bear> = {
  component: Bear,
};

export default meta;

type Story = StoryObj<typeof Bear>;

export const Default: Story = {
  render: () => <Bear />,
};
