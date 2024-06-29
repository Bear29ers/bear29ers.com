import type { MetadataRoute } from 'next';

const manifetst = (): MetadataRoute.Manifest => {
  return {
    name: 'Bear29ers portfolio website',
    short_name: 'Bear29ers',
    description: 'A new portfolio website by Bear29ers.',
    start_url: '/',
    display: 'standalone',
    background_color: '#232A36',
    theme_color: '#232A36',
    icons: [
      {
        src: '/images/android-chrome-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/images/android-chrome-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
};

export default manifetst;
