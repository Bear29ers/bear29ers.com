import SocialIcons from './SocialIcons';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof SocialIcons> = {
  component: SocialIcons,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof SocialIcons>;

export const Default: Story = {
  args: {
    lightMode: false,
  },
  render: ({ lightMode }) => {
    return <SocialIcons lightMode={lightMode} />;
  },
};
