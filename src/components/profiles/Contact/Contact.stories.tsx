import Contact from './Contact';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Contact> = {
  component: Contact,
};

export default meta;

type Story = StoryObj<typeof Contact>;

export const Default: Story = {
  render: () => <Contact />,
};
