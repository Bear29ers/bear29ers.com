import MenuWindow from './MenuWindow';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof MenuWindow> = {
  component: MenuWindow,
};

export default meta;

type Story = StoryObj<typeof MenuWindow>;

export const Default: Story = {
  render: () => <MenuWindow />,
};
