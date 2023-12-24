import GithubIcon from './GithubIcon';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof GithubIcon> = {
  component: GithubIcon,
};

export default meta;

type Story = StoryObj<typeof GithubIcon>;

export const IsClickedTrue: Story = {
  render: () => <GithubIcon isClicked />,
};

export const IsClickedFalse: Story = {
  render: () => <GithubIcon isClicked={false} />,
};

export const W20IsClickedTrue: Story = {
  render: () => (
    <div className="w-20">
      <GithubIcon isClicked />
    </div>
  ),
};

export const W20IsClickedFalse: Story = {
  render: () => (
    <div className="w-20">
      <GithubIcon isClicked={false} />
    </div>
  ),
};
