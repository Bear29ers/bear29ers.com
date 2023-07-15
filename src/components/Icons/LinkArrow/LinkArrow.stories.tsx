import LinkArrow from './LinkArrow';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof LinkArrow> = {
  component: LinkArrow,
};

export default meta;

type Story = StoryObj<typeof LinkArrow>;

export const Standard: Story = {
  render: () => <LinkArrow className="" />,
};

export const W20: Story = {
  render: () => <LinkArrow className="!w-20" />,
};
