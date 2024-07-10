import ScrollDown from './ScrollDown';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ScrollDown> = {
  component: ScrollDown,
};

export default meta;

type Story = StoryObj<typeof ScrollDown>;

export const Default: Story = {
  render: () => <ScrollDown />,
};
