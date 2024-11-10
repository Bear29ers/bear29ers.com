import LocaleSwitch from './LocaleSwitch';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof LocaleSwitch> = {
  component: LocaleSwitch,
};

export default meta;

type Story = StoryObj<typeof LocaleSwitch>;

export const Default: Story = {
  render: () => (
    <div className="h-screen w-screen bg-dark p-4">
      <LocaleSwitch />
    </div>
  ),
};
