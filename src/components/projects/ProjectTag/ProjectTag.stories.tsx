import ProjectTag from './ProjectTag';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ProjectTag> = {
  component: ProjectTag,
};

export default meta;

type Story = StoryObj<typeof ProjectTag>;

export const Default: Story = {
  render: () => <ProjectTag />,
};
