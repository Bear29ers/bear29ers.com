import GithubIcon from './GithubIcon';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof GithubIcon> = {
  component: GithubIcon,
};

export default meta;

type Story = StoryObj<typeof GithubIcon>;

export const Default: Story = {
  args: {
    lightMode: false,
  },
  render: ({ lightMode }) => {
    return (
      <div className="w-40">
        <GithubIcon lightMode={lightMode} />
      </div>
    );
  },
};
