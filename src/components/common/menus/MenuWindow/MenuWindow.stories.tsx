import MenuWindow from './MenuWindow';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof MenuWindow> = {
  component: MenuWindow,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof MenuWindow>;

export const Default: Story = {
  args: {
    isOpen: false,
    isMobile: false,
    pathname: '/about',
    locale: 'en',
  },
  render: ({ isOpen, isMobile, pathname, locale }) => {
    return (
      <div className="h-screen w-screen flex-center">
        <MenuWindow isOpen={isOpen} isMobile={isMobile} pathname={pathname} locale={locale} />
      </div>
    );
  },
};
