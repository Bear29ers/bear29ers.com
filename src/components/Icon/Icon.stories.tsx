import Icon from './Icon';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Icon> = {
  component: Icon,
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const IsClickedTrue: Story = {
  render: () => (
    <div className="flex flex-col gap-y-4">
      <div className="h-24 w-24">
        <Icon iconName="github" isClicked />
      </div>
      <div className="h-24 w-24">
        <Icon iconName="instagram" isClicked />
      </div>
      <div className="h-24 w-24">
        <Icon iconName="threads" isClicked />
      </div>
      <div className="h-24 w-24">
        <Icon iconName="facebook" isClicked />
      </div>
    </div>
  ),
};

export const IsClickedFalse: Story = {
  render: () => (
    <div className="flex flex-col gap-y-4">
      <div className="h-24 w-24">
        <Icon iconName="github" isClicked={false} />
      </div>
      <div className="h-24 w-24">
        <Icon iconName="instagram" isClicked={false} />
      </div>
      <div className="h-24 w-24">
        <Icon iconName="threads" isClicked={false} />
      </div>
      <div className="h-24 w-24">
        <Icon iconName="facebook" isClicked={false} />
      </div>
    </div>
  ),
};
