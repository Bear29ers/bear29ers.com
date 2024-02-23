import SocialIcons from './SocialIcons';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof SocialIcons> = {
  component: SocialIcons,
};

export default meta;

type Story = StoryObj<typeof SocialIcons>;

export const Default: Story = {
  args: {
    isClicked: false,
  },
  render: ({ isClicked }) => {
    return <SocialIcons isClicked={isClicked} />;
  },
};
