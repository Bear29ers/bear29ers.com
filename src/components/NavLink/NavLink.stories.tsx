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
    className: 'mr-4',
  },
};

export const About: Story = {
  render: (args) => <NavLink {...args} />,
  args: {
    href: '/about',
    title: 'About',
    className: 'mr-4',
  },
};

export const Projects: Story = {
  render: (args) => <NavLink {...args} />,
  args: {
    href: '/projects',
    title: 'Projects',
    className: 'mr-4',
  },
};

export const Articles: Story = {
  render: (args) => <NavLink {...args} />,
  args: {
    href: '/articles',
    title: 'Articles',
    className: 'ml-4',
  },
};
