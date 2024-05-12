import ProjectHighlight from './ProjectHighlight';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ProjectHighlight> = {
  component: ProjectHighlight,
};

export default meta;

type Story = StoryObj<typeof ProjectHighlight>;

export const Default: Story = {
  render: () => <ProjectHighlight />,
};
