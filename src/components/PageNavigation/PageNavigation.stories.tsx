import PageNavigation from './PageNavigation';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof PageNavigation> = {
  component: PageNavigation,
};

export default meta;

type Story = StoryObj<typeof PageNavigation>;

export const Default: Story = {
  render: () => <PageNavigation />,
};
