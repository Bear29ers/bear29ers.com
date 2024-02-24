import Skills from './Skills';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Skills> = {
  component: Skills,
};

export default meta;

type Story = StoryObj<typeof Skills>;

export const Default: Story = {
  render: () => <Skills />,
};
