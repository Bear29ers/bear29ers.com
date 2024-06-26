import ProjectHighlight from './ProjectHighlight';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ProjectHighlight> = {
  component: ProjectHighlight,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ProjectHighlight>;

export const Default: Story = {
  args: {
    highlight: 'Dockerize the project',
  },
  render: ({ highlight }) => {
    return (
      <div className="text-white">
        <ProjectHighlight highlight={highlight} />
      </div>
    );
  },
};
