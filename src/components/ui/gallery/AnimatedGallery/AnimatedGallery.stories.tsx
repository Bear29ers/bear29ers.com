import AnimatedGallery from './AnimatedGallery';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof AnimatedGallery> = {
  component: AnimatedGallery,
};

export default meta;

type Story = StoryObj<typeof AnimatedGallery>;

export const Default: Story = {
  render: () => <AnimatedGallery />,
};
