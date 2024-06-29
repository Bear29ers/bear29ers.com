import type { MenuItem } from '../common/types/menuItems';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 1,
    href: '/',
    text: 'Home',
    isAvaliable: true,
  },
  {
    id: 2,
    href: '/about',
    text: 'About',
    isAvaliable: true,
  },
  {
    id: 3,
    href: '/experience',
    text: 'Experience',
    isAvaliable: true,
  },
  {
    id: 4,
    href: '/works',
    text: 'Works',
    isAvaliable: false,
  },
  {
    id: 5,
    href: '/gallery',
    text: 'Gallery',
    isAvaliable: false,
  },
];
