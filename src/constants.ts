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

export const SOCIAL_LINK = {
  github: 'https://github.com/Bear29ers',
  facebook: 'https://www.facebook.com/kumakuma1129',
  instagram: 'https://www.instagram.com/bear_27earl',
};

export const HOME_TEXT = {
  title: 'Code and Design make vision a reality',
  description: `As a front-end developer and designer, I really enjoy giving shape to my own ideas.\nExplore my personality and latest projests and articles in web development.`,
};
