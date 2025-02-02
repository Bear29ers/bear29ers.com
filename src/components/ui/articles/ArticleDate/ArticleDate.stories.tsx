import ArticleDate from './ArticleDate';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ArticleDate> = {
  component: ArticleDate,
};

export default meta;

type Story = StoryObj<typeof ArticleDate>;

export const Default: Story = {
  render: () => <ArticleDate />,
};
