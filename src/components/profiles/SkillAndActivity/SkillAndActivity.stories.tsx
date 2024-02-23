import SkillAndActivity from './SkillAndActivity';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof SkillAndActivity> = {
  component: SkillAndActivity,
};

export default meta;

type Story = StoryObj<typeof SkillAndActivity>;

export const Default: Story = {
  render: () => {
    return (
      <div className="mx-auto w-full max-w-[960px]">
        <SkillAndActivity />
      </div>
    );
  },
};
