import { LocationIcon, OrganizationIcon, PencilIcon, WebsiteIcon, WavingHand } from './ProfileIcons';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof OrganizationIcon> = {
  component: OrganizationIcon,
};

export default meta;

type Story = StoryObj<typeof OrganizationIcon>;
type StoryWave = StoryObj<typeof WavingHand>;

export const Organization: Story = {
  render: () => {
    return (
      <div className="w-40">
        <OrganizationIcon />
      </div>
    );
  },
};

export const Location: Story = {
  render: () => {
    return (
      <div className="w-40">
        <LocationIcon />
      </div>
    );
  },
};

export const Website: Story = {
  render: () => {
    return (
      <div className="w-40">
        <WebsiteIcon />
      </div>
    );
  },
};

export const Pencil: Story = {
  render: () => {
    return (
      <div className="w-40">
        <PencilIcon />
      </div>
    );
  },
};

export const WaveHand: StoryWave = {
  render: () => <WavingHand />,
};
