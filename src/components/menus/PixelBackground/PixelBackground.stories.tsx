import PixelBackground from './PixelBackground';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof PixelBackground> = {
  component: PixelBackground,
};

export default meta;

type Story = StoryObj<typeof PixelBackground>;

export const Default: Story = {
  args: {
    isDisplay: false,
  },
  render: ({ isDisplay }) => {
    return <PixelBackground isDisplay={isDisplay} />;
  },
};
