import MenuList from './MenuList';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof MenuList> = {
  component: MenuList,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof MenuList>;

export const Default: Story = {
  args: {
    pathname: '/about',
    locale: 'en',
    setIsOpen: () => {},
  },
  render: ({ pathname, locale, setIsOpen }) => {
    return (
      <div className="relative h-[650px] w-[500px] rounded-3xl bg-dark">
        <MenuList pathname={pathname} locale={locale} setIsOpen={setIsOpen} />
      </div>
    );
  },
};
