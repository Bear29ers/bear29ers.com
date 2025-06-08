import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { usePathname } from 'next/navigation';

import ColorPicker from './ColorPicker';

import type { RenderResult } from '@testing-library/react';

jest.mock('next/navigation', () => ({
  ...jest.requireActual('next/navigation'),
  usePathname: jest.fn(),
}));

describe('src/components/common/ColorPicker/ColorPicker.test.tsx', () => {
  // mock matchMedia for testing
  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // deprecated
        removeListener: jest.fn(), // deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });

  describe('when the pathname is exception', () => {
    it.each(['/', '/ja', '/about', '/ja/about'])(
      'should not display the button element for excluded path: %s',
      (pathname: string) => {
        (usePathname as jest.Mock).mockReturnValue(pathname);
        render(<ColorPicker />);
        expect(screen.queryByRole('button')).not.toBeInTheDocument();
      }
    );
  });

  describe('when the pathname is non-exception', () => {
    let renderResult: RenderResult;

    beforeEach(() => {
      (usePathname as jest.Mock).mockReturnValue('/experience');
      renderResult = render(<ColorPicker />);
    });

    afterEach(() => {
      renderResult.unmount();
    });

    describe('when the theme color is red', () => {
      it('should display the theme color (red) button element', () => {
        expect(screen.getByRole('button', { name: 'red-theme-color-button' })).toBeInTheDocument();
      });

      it.each(['orange', 'green', 'cyan', 'violet'])(
        'should display the picking color (%s) button elements',
        (color: string) => {
          expect(screen.getByRole('button', { name: `${color}-color-button` })).toBeInTheDocument();
        }
      );
    });

    describe('when orange button is clicked', () => {
      it('should change the theme color button element', () => {
        const orangeButton = screen.getByRole('button', { name: 'orange-color-button' });
        fireEvent.click(orangeButton);
        expect(screen.getByRole('button', { name: 'orange-theme-color-button' })).toBeInTheDocument();
      });

      it.each(['red', 'green', 'cyan', 'violet'])(
        'should display the picking color (%s) button elements',
        (color: string) => {
          expect(screen.getByRole('button', { name: `${color}-color-button` })).toBeInTheDocument();
        }
      );
    });

    describe('button positioning', () => {
      it('should position buttons correctly when opened', () => {
        const themeButton = screen.getByRole('button', { name: 'orange-theme-color-button' });
        fireEvent.click(themeButton);

        const colorButtons = screen.getAllByRole('button').slice(1);
        colorButtons.forEach((button, _) => {
          expect(button).toHaveClass('absolute');
          expect(button).toHaveClass('left-1/2');
          expect(button).toHaveClass('top-1/2');
        });
      });
    });
  });
});
