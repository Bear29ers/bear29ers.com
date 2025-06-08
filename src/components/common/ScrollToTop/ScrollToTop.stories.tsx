import mockRouter from 'next-router-mock';

import ScrollToTop from './ScrollToTop';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ScrollToTop> = {
  component: ScrollToTop,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ScrollToTop>;

export const Default: Story = {
  beforeEach: () => {
    mockRouter.setCurrentUrl('/experience');
  },
  render: () => (
    <div className="h-[150vh] w-full">
      <div className="fixed bottom-6 right-10">
        <ScrollToTop />
      </div>
    </div>
  ),
};
