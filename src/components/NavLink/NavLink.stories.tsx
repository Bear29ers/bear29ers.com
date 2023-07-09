import NavLink from './NavLink';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof NavLink> = {
  component: NavLink,
};

export default meta;

type Story = StoryObj<typeof NavLink>;

export const Home: Story = {
  render: (args) => <NavLink {...args} />,
  args: {
    href: '/',
    title: 'Home',
  },
};

export const About: Story = {
  render: (args) => <NavLink {...args} />,
  args: {
    href: '/about',
    title: 'About',
  },
};

export const Projects: Story = {
  render: (args) => <NavLink {...args} />,
  args: {
    href: '/projects',
    title: 'Projects',
  },
};

export const Articles: Story = {
  render: (args) => <NavLink {...args} />,
  args: {
    href: '/articles',
    title: 'Articles',
  },
};
