type NavContents = {
  id: number;
  href: string;
  title: string;
};

export const NAV_CONTENTS: NavContents[] = [
  {
    id: 1,
    href: '/',
    title: 'Home',
  },
  {
    id: 2,
    href: '/about',
    title: 'About',
  },
  {
    id: 3,
    href: '/projects',
    title: 'Projects',
  },
  {
    id: 4,
    href: '/articles',
    title: 'Articles',
  },
];
