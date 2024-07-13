import Reveal from './Reveal';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Reveal> = {
  component: Reveal,
};

export default meta;

type Story = StoryObj<typeof Reveal>;

export const Default: Story = {
  render: () => <Reveal />,
};
