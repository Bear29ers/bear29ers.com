import Project from './Project';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Project> = {
  component: Project,
};

export default meta;

type Story = StoryObj<typeof Project>;

export const Default: Story = {
  render: () => <Project />,
};
