import Tbd from './Tbd';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Tbd> = {
  component: Tbd,
};

export default meta;

type Story = StoryObj<typeof Tbd>;

export const Standard: Story = {
  render: () => <Tbd width="w-5/12" />,
};
