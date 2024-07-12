import Gallery from './Gallery';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Gallery> = {
  component: Gallery,
};

export default meta;

type Story = StoryObj<typeof Gallery>;

export const Default: Story = {
  render: () => <Gallery />,
};
