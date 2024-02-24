import SkillIcons from './SkillIcons';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof SkillIcons> = {
  component: SkillIcons,
};

export default meta;

type Story = StoryObj<typeof SkillIcons>;

export const Default: Story = {
  render: () => <SkillIcons />,
};
