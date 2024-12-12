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
    id: 2,
    company: 'gakkenLeap',
    index: 0,
  },
  render: ({ id, company, index }) => {
    return (
      <div className="text-white">
        <ProjectHighlight id={id} company={company} index={index} />
      </div>
    );
  },
};
