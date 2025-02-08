import ArticleProfile from './ArticleProfile';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ArticleProfile> = {
  component: ArticleProfile,
};

export default meta;

type Story = StoryObj<typeof ArticleProfile>;

export const Default: Story = {
  render: () => <ArticleProfile />,
};
