import Preloader from './Preloader';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Preloader> = {
  component: Preloader,
};

export default meta;

type Story = StoryObj<typeof Preloader>;

export const Default: Story = {
  render: () => <Preloader />,
};
