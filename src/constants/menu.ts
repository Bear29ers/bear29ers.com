interface MenuItem {
  id: number;
  href: string;
  title: string;
  isValid: boolean;
}

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 1,
    href: '/',
    title: 'Home',
    isValid: true,
  },
  {
    id: 2,
    href: '/about',
    title: 'About',
    isValid: true,
  },
  {
    id: 3,
    href: '/experience',
    title: 'Experience',

    isValid: false,
  },
  {
    id: 4,
    href: '/works',
    title: 'Works',
    isValid: false,
  },
  {
    id: 5,
    href: '/gallery',
    title: 'Gallery',
    isValid: false,
  },
];
