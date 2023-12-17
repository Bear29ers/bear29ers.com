import SocialIcons from './SocialIcons';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof SocialIcons> = {
  component: SocialIcons,
};

export default meta;

type Story = StoryObj<typeof SocialIcons>;

export const IsClickedTrue: Story = {
  render: () => <SocialIcons isClicked />,
};

export const IsClickedFalse: Story = {
  render: () => <SocialIcons isClicked={false} />,
};
