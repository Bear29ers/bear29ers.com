import Footer from './Footer';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Footer> = {
  component: Footer,
};

export default meta;

type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  render: () => {
    return (
      <div className="w-full">
        <Footer />
      </div>
    );
  },
};
