import Cursor from './Cursor';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Cursor> = {
  component: Cursor,
};

export default meta;

type Story = StoryObj<typeof Cursor>;

export const Default: Story = {
  render: () => <Cursor />,
};
