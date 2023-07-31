import LanguagesTools from './LanguagesTools';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof LanguagesTools> = {
  component: LanguagesTools,
};

export default meta;

type Story = StoryObj<typeof LanguagesTools>;

export const Standard: Story = {
  render: () => <LanguagesTools />,
};
