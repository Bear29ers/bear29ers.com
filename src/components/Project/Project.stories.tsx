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
  role: 'Frontend Developer',
  company: 'Gakken LEAP Co.,Ltd',
  location: 'Tokyo, Japan',
  tagList: ['HTML', '(S)CSS', 'Tailwind', 'JavaScript', 'TypeScript', 'React', 'NextJS', 'Figma', 'UI', 'UX'],
  description:
    'Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.',
  highlightList: ['tennant-theming for an existing component library', 'Introduced Designed Tokens'],
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
