import Project from './Project';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Project> = {
  component: Project,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Project>;

const projectData = {
  id: 1,
  startAt: '2024.5',
  endAt: 'current',
  role: 'frontend',
  company: 'gakkenLeap',
  location: 'tokyo',
  tagList: ['HTML', '(S)CSS', 'Tailwind', 'JavaScript', 'TypeScript', 'React', 'NextJS', 'Figma', 'UI', 'UX'],
  description: [0, 1],
  highlightList: [0, 1],
};

export const Default: Story = {
  args: {
    project: projectData,
  },
  render: ({ project }) => {
    return (
      <div className="text-white">
        <Project project={project} />
      </div>
    );
  },
};
