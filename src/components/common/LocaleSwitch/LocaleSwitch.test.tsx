import { render, screen } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';

import messages from '../../../../messages/en.json';

import LocaleSwitch from './LocaleSwitch';

import type { RenderResult } from '@testing-library/react';

jest.mock('next/navigation', () => ({
  usePathname: () => '/',
  useRouter: () => ({
    back: jest.fn(),
    forward: jest.fn(),
    refresh: jest.fn(),
    push: jest.fn(),
    prefetch: jest.fn(),
    replace: jest.fn(),
  }),
  useParams: () => ({ locale: 'en' }),
  useSelectedLayoutSegment: () => ({ locale: 'en' }),
}));

describe('src/components/common/LocaleSwitch/LocaleSwitch.test.tsx', () => {
  let renderResult: RenderResult;
  const locale = 'en';

  describe('when globalLocale props is different from locale props', () => {
    beforeEach(() => {
      renderResult = render(
        <NextIntlClientProvider locale={locale} messages={messages}>
          <LocaleSwitch globalLocale={locale} locale={locale}>
            LocaleSwitch
          </LocaleSwitch>
        </NextIntlClientProvider>
      );
    });

    afterEach(() => {
      renderResult.unmount();
    });

    it('should render the LocaleSwitch component', () => {
      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('should not apply opacity tailwind class', () => {
      expect(screen.getByRole('button')).not.toHaveClass('opacity-40');
    });
  });
});
