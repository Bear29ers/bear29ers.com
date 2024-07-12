import MainGallery from './MainGallery';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof MainGallery> = {
  component: MainGallery,
};

export default meta;

type Story = StoryObj<typeof MainGallery>;

export const Default: Story = {
  render: () => <MainGallery />,
};
