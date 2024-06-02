import SectionTitle from './SectionTitle';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof SectionTitle> = {
  component: SectionTitle,
};

export default meta;

type Story = StoryObj<typeof SectionTitle>;

export const Default: Story = {
  render: () => <SectionTitle />,
};
