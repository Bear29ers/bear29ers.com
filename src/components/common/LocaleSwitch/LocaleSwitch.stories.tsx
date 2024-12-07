import { USIcon } from '@/components/icons/InternationalIcons/InternationalIcons';

import LocaleSwitch from './LocaleSwitch';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof LocaleSwitch> = {
  component: LocaleSwitch,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof LocaleSwitch>;

export const Default: Story = {
  args: {
    globalLocale: 'en',
    locale: 'en',
    children: <USIcon />,
  },
  render: ({ globalLocale, locale, children }) => (
    <div className="h-screen w-screen bg-dark p-4">
      <LocaleSwitch globalLocale={globalLocale} locale={locale}>
        {children}
      </LocaleSwitch>
    </div>
  ),
};
