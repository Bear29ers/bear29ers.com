import GithubIcon from './GithubIcon';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof GithubIcon> = {
  component: GithubIcon,
};

export default meta;

type Story = StoryObj<typeof GithubIcon>;

export const Default: Story = {
  args: {
    isClicked: false,
  },
  render: ({ isClicked }) => {
    return (
      <div className="w-40">
        <GithubIcon isClicked={isClicked} />
      </div>
    );
  },
};
