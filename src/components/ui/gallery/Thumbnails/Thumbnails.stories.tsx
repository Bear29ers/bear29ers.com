import Thumbnails from './Thumbnails';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Thumbnails> = {
  component: Thumbnails,
};

export default meta;

type Story = StoryObj<typeof Thumbnails>;

export const Default: Story = {
  render: () => <Thumbnails />,
};
