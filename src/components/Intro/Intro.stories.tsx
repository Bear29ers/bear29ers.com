import Intro from './Intro';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Intro> = {
  component: Intro,
};

export default meta;

type Story = StoryObj<typeof Intro>;

export const Standard: Story = {
  // TODO: 正しく表示されるようにする
  render: () => <Intro />,
};
