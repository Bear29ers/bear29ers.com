import { LocationIcon, OrganizationIcon, PencilIcon, WebsiteIcon } from './ProfileIcons';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof OrganizationIcon> = {
  component: OrganizationIcon,
};

export default meta;

type Story = StoryObj<typeof OrganizationIcon>;

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
