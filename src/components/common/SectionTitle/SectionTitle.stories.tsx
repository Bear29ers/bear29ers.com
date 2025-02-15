import SectionTitle from './SectionTitle';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof SectionTitle> = {
  component: SectionTitle,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof SectionTitle>;

export const Default: Story = {
  args: {
    title: 'Biography',
  },
  render: ({ title }) => {
    return <SectionTitle title={title} />;
  },
};
