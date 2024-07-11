import MainVisual from './MainVisual';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof MainVisual> = {
  component: MainVisual,
};

export default meta;

type Story = StoryObj<typeof MainVisual>;

export const Default: Story = {
  render: () => <MainVisual />,
};
