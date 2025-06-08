import mockRouter from 'next-router-mock';

import ColorPicker from './ColorPicker';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ColorPicker> = {
  component: ColorPicker,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ColorPicker>;

export const Default: Story = {
  beforeEach: () => {
    mockRouter.setCurrentUrl('/experience');
  },
  render: () => <ColorPicker />,
};
