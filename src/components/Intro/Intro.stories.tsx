import Intro from './Intro';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Intro> = {
  component: Intro,
  args: {
    isClicked: false,
  },
};

export default meta;

type Story = StoryObj<typeof Intro>;

export const Standard: Story = (props) => {
  return <Intro {...props} />;
};
