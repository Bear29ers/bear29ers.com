import { getRouter, usePathname } from '@storybook/nextjs/navigation.mock';
import '../src/app/globals.css';
import mockRouter from 'next-router-mock';

import nextIntl from './next-intl';

import type { Preview } from '@storybook/react';

const preview: Preview = {
  initialGlobals: {
    locale: 'en',
    locales: {
      en: { icon: '🇺🇸', title: 'English', right: 'EN' },
      ja: { icon: '🇯🇵', title: '日本語', right: 'JA' },
    },
  },
  parameters: {
    nextIntl,
    nextjs: {
      appDirectory: true,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  beforeEach: () => {
    getRouter().push.mockImplementation((...args: Parameters<typeof mockRouter.push>) => mockRouter.push(...args));
    getRouter().replace.mockImplementation((...args: Parameters<typeof mockRouter.replace>) =>
      mockRouter.replace(...args)
    );
    usePathname.mockImplementation(() => mockRouter.pathname);
  },
};

export default preview;
