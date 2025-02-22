import ArticleTag from './ArticleTag';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ArticleTag> = {
  component: ArticleTag,
  tags: ['autotags'],
};

export default meta;

type Story = StoryObj<typeof ArticleTag>;

export const Default: Story = {
  render: () => <ArticleTag />,
};
