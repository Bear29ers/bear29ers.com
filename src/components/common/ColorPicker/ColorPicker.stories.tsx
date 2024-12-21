import ColorPicker from './ColorPicker';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ColorPicker> = {
  component: ColorPicker,
};

export default meta;

type Story = StoryObj<typeof ColorPicker>;

export const Default: Story = {
  render: () => <ColorPicker />,
};
