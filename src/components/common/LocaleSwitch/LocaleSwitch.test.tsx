import { fireEvent, render, screen } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';

import messages from '../../../../messages/en.json';

import LocaleSwitch from './LocaleSwitch';

import type { RenderResult } from '@testing-library/react';

const mockRouterReplace = jest.fn();

jest.mock('next/navigation', () => ({
  usePathname: () => '/',
  useRouter: () => ({
    back: jest.fn(),
    forward: jest.fn(),
    refresh: jest.fn(),
    push: jest.fn(),
    prefetch: jest.fn(),
    replace: mockRouterReplace,
  }),
  useParams: () => ({ locale: 'en' }),
  useSelectedLayoutSegment: () => ({ locale: 'en' }),
}));

describe('src/components/common/LocaleSwitch/LocaleSwitch.test.tsx', () => {
  let renderResult: RenderResult;
  const locale = 'en';

  describe('when globalLocale props is same as locale props', () => {
    beforeEach(() => {
      renderResult = render(
        <NextIntlClientProvider locale={locale} messages={messages}>
          <LocaleSwitch globalLocale={locale} locale={locale} themeColor="Red">
            LocaleSwitch
          </LocaleSwitch>
        </NextIntlClientProvider>
      );
    });

    afterEach(() => {
      renderResult.unmount();
    });

    it('should render the button element', () => {
      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('should not apply opacity tailwind class', () => {
      expect(screen.getByRole('button')).not.toHaveClass('opacity-40');
    });

    it('should disable the button', () => {
      expect(screen.getByRole('button')).toBeDisabled();
    });

    it('should render the active indicator', () => {
      expect(renderResult.container.querySelector('.h-\\[3px\\]')).toBeInTheDocument();
    });

    it('should not call router.replace', () => {
      const button = screen.getByRole('button');
      fireEvent.click(button);

      expect(mockRouterReplace).not.toHaveBeenCalled();
    });
  });

  describe('when globalLocale props is different from locale props', () => {
    beforeEach(() => {
      renderResult = render(
        <NextIntlClientProvider locale={locale} messages={messages}>
          <LocaleSwitch globalLocale={locale} locale="ja" themeColor="Red">
            LocaleSwitch
          </LocaleSwitch>
        </NextIntlClientProvider>
      );
    });

    afterEach(() => {
      renderResult.unmount();
    });

    it('should render the button element', () => {
      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('should not apply opacity tailwind class', () => {
      expect(screen.getByRole('button')).toHaveClass('opacity-40');
    });

    it('should enable the button', () => {
      expect(screen.getByRole('button')).toBeEnabled();
    });

    it('should not render the active indicator', () => {
      expect(renderResult.container.querySelector('.h-\\[3px\\]')).not.toBeInTheDocument();
    });

    it('should call router.replace', () => {
      const button = screen.getByRole('button');
      fireEvent.click(button);

      expect(mockRouterReplace).toHaveBeenCalled();
    });
  });
});
