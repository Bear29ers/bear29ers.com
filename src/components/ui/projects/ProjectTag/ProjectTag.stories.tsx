import ProjectTag from './ProjectTag';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ProjectTag> = {
  component: ProjectTag,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ProjectTag>;

export const Default: Story = {
  args: {
    tagName: 'HTML',
    themeColor: 'Red',
  },
  render: ({ tagName, themeColor }) => {
    return <ProjectTag tagName={tagName} themeColor={themeColor} />;
  },
};
