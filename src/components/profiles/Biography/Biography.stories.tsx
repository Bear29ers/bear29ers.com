import Biography from './Biography';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Biography> = {
  component: Biography,
};

export default meta;

type Story = StoryObj<typeof Biography>;

export const Default: Story = {};
