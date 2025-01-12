import ScrollDown from './ScrollDown';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ScrollDown> = {
  component: ScrollDown,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ScrollDown>;

export const Default: Story = {
  args: {
    state: false,
    setState: () => {},
    themeColor: 'Red',
  },
  render: ({ state, setState, themeColor }) => {
    return (
      <div className="h-screen w-full bg-dark">
        <ScrollDown state={state} setState={setState} themeColor={themeColor} />
      </div>
    );
  },
};
