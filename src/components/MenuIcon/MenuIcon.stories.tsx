import { useState } from 'react';

import MenuIcon from './MenuIcon';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof MenuIcon> = {
  component: MenuIcon,
};

export default meta;

type Story = StoryObj<typeof MenuIcon>;

const MenuIconWithProps = () => {
  const [menuIsActive, setMenuIsActive] = useState<boolean>(false);
  return <MenuIcon menuIsActive={menuIsActive} setMenuIsActive={setMenuIsActive} />;
};

export const Standard: Story = {
  render: () => <MenuIconWithProps />,
};
