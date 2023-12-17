import { useState } from 'react';

import Bear from './Bear';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Bear> = {
  component: Bear,
};

export default meta;

type Story = StoryObj<typeof Bear>;

export const Standard: Story = {
  render: function Compo() {
    const [_, setValue] = useState<boolean>(false);
    return (
      <div className="relative h-screen w-screen">
        <Bear setIsClicked={setValue} />
      </div>
    );
  },
};
