import GalleryIntro from './GalleryIntro';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof GalleryIntro> = {
  component: GalleryIntro,
};

export default meta;

type Story = StoryObj<typeof GalleryIntro>;

export const Default: Story = {
  render: () => <GalleryIntro />,
};
