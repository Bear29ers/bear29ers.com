import { HOME_PROFILE_TEXT } from '@/common/constants/home';

import Intro from './Intro';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Intro> = {
  component: Intro,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Intro>;

export const Default: Story = {
  args: {
    isClicked: false,
    homeProfileText: HOME_PROFILE_TEXT,
  },
  render: ({ isClicked, homeProfileText }) => {
    return <Intro isClicked={isClicked} homeProfileText={homeProfileText} />;
  },
};
