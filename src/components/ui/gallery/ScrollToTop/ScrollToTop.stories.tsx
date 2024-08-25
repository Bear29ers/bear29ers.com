import ScrollToTop from './ScrollToTop';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ScrollToTop> = {
  component: ScrollToTop,
};

export default meta;

type Story = StoryObj<typeof ScrollToTop>;

export const Default: Story = {
  render: () => <ScrollToTop />,
};
