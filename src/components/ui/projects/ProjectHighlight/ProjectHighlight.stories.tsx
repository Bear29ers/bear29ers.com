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
    themeColor: 'Red',
  },
  render: ({ id, company, index, themeColor }) => {
    return (
      <div className="text-white">
        <ProjectHighlight id={id} company={company} index={index} themeColor={themeColor} />
      </div>
    );
  },
};
