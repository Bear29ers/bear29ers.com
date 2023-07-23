import LanguagesTools from './LanguagesTools';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof LanguagesTools> = {
  component: LanguagesTools,
};

export default meta;

type Story = StoryObj<typeof LanguagesTools>;

export const Standard: Story = {
  render: () => (
    <div
      className="m-0 h-screen w-screen place-content-center place-items-center overflow-hidden p-0 text-center"
      style={{ perspective: 1000 }}>
      <LanguagesTools />,
    </div>
  ),
};
