import GridGallery from './GridGallery';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof GridGallery> = {
  component: GridGallery,
};

export default meta;

type Story = StoryObj<typeof GridGallery>;

export const Default: Story = {
  render: () => <GridGallery />,
};
