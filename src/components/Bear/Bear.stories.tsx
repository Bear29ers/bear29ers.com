import Bear from './Bear';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Bear> = {
  component: Bear,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Bear>;

export const Default: Story = {
  args: {
    isClicked: false,
    setIsClicked: () => {},
  },
  render: ({ isClicked, setIsClicked }) => {
    return (
      <div className="relative h-screen w-screen">
        <Bear isClicked={isClicked} setIsClicked={setIsClicked} />
      </div>
    );
  },
};
