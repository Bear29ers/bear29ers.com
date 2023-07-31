import { TailwindDark } from './SkillIconsDark';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof TailwindDark> = {
  component: TailwindDark,
};

export default meta;

type Story = StoryObj<typeof TailwindDark>;

export const TAILWIND: Story = {
  render: () => <TailwindDark />,
};
