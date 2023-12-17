interface SocialMedia {
  id: number;
  href: string;
  describedby: string;
  text: string;
}

// ソーシャルメディアアイコンのリスト
export const SOCIAL_MEDIA_LIST: SocialMedia[] = [
  {
    id: 1,
    href: 'https://github.com/Bear29ers',
    describedby: 'navlink-id-1',
    text: 'github',
  },
  {
    id: 2,
    href: 'https://www.instagram.com/bear_27earl',
    describedby: 'navlink-id-2',
    text: 'instagram',
  },
  {
    id: 3,
    href: 'https://www.threads.net/@bear_27earl',
    describedby: 'navlink-id-3',
    text: 'threads',
  },
  {
    id: 4,
    href: 'https://www.facebook.com/kumakuma1129',
    describedby: 'navlink-id-4',
    text: 'facebook',
  },
];
