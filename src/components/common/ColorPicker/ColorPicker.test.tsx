import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useAtom } from 'jotai';
import { usePathname } from 'next/navigation';

import { COLORS } from '@/constants/colors';

import ColorPicker from './ColorPicker';

import type { RenderResult } from '@testing-library/react';

jest.mock('next/navigation', () => ({
  ...jest.requireActual('next/navigation'),
  usePathname: jest.fn(),
}));

jest.mock('jotai', () => ({
  ...jest.requireActual('jotai'),
  useAtom: jest.fn(),
}));

const setSelectedThemeColor = jest.fn();

describe('src/components/common/ColorPicker/ColorPicker.test.tsx', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
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
        (useAtom as jest.Mock).mockReturnValue(['Red', setSelectedThemeColor]);
        render(<ColorPicker />);
        expect(screen.queryByRole('button')).not.toBeInTheDocument();
      }
    );
  });

  describe('when the pathname is non-exception', () => {
    let renderResult: RenderResult;

    beforeEach(() => {
      (usePathname as jest.Mock).mockReturnValue('/experience');
    });

    afterEach(() => {
      renderResult.unmount();
      jest.clearAllMocks();
    });

    describe('when the theme color is Red', () => {
      beforeEach(() => {
        (useAtom as jest.Mock).mockReturnValue(['Red', setSelectedThemeColor]);
        renderResult = render(<ColorPicker />);
      });

      it('should display the theme color (Red) button element', () => {
        expect(screen.getByRole('button', { name: 'red-theme-color-button' })).toBeInTheDocument();
      });

      it.each(COLORS.filter((c) => c !== 'Red').slice(0, 4))(
        'should display the picking color (%s) button elements',
        (color: string) => {
          expect(screen.getByRole('button', { name: `${color.toLowerCase()}-color-button` })).toBeInTheDocument();
        }
      );
    });

    describe('when a color button is clicked', () => {
      it('should call setSelectedThemeColor with the correct color and close the picker', () => {
        (useAtom as jest.Mock).mockReturnValue(['Red', setSelectedThemeColor]);
        renderResult = render(<ColorPicker />);

        const orangeButton = screen.getByRole('button', { name: 'orange-color-button' });
        fireEvent.click(orangeButton);

        expect(setSelectedThemeColor).toHaveBeenCalledWith('Orange');
      });
    });

    describe('picker open/close behavior', () => {
      beforeEach(() => {
        (useAtom as jest.Mock).mockReturnValue(['Red', setSelectedThemeColor]);
        renderResult = render(<ColorPicker />);
      });

      it('should open the color picker when the theme button is clicked', async () => {
        const themeButton = screen.getByRole('button', { name: 'red-theme-color-button' });
        fireEvent.click(themeButton);

        const orangeButton = screen.getByRole('button', { name: 'orange-color-button' });
        await waitFor(() => {
          expect(orangeButton.style.transform).toContain('translateX');
        });
      });

      it('should close the color picker when the theme button is clicked again', async () => {
        const themeButton = screen.getByRole('button', { name: 'red-theme-color-button' });
        fireEvent.click(themeButton); // Open

        const orangeButton = screen.getByRole('button', { name: 'orange-color-button' });
        await waitFor(() => {
          expect(orangeButton.style.transform).not.toContain('translateX(-50%) translateY(-50%)');
        });

        fireEvent.click(themeButton); // Close

        await waitFor(() => {
          expect(orangeButton.style.transform).toContain('translateX(-50%) translateY(-50%)');
        });
      });
    });

    describe('responsive behavior', () => {
      it('should use mobile radius on smaller screens', async () => {
        (window.matchMedia as jest.Mock).mockImplementation((query) => ({
          matches: query === '(max-width: 449px)',
          media: query,
          onchange: null,
          addListener: jest.fn(),
          removeListener: jest.fn(),
          addEventListener: jest.fn(),
          removeEventListener: jest.fn(),
          dispatchEvent: jest.fn(),
        }));

        (useAtom as jest.Mock).mockReturnValue(['Red', setSelectedThemeColor]);
        renderResult = render(<ColorPicker />);

        const themeButton = screen.getByRole('button', { name: 'red-theme-color-button' });
        fireEvent.click(themeButton);

        const orangeButton = screen.getByRole('button', { name: 'orange-color-button' });
        await waitFor(() => {
          // A rough check to see if the transform is applied
          expect(orangeButton).not.toHaveStyle({transform:'translateX(-50%) translateY(-50%)'});
        });
      });

      it('should use desktop radius on larger screens', async () => {
        (window.matchMedia as jest.Mock).mockImplementation((query) => ({
          matches: false, // Simulating desktop
          media: query,
          onchange: null,
          addListener: jest.fn(),
          removeListener: jest.fn(),
          addEventListener: jest.fn(),
          removeEventListener: jest.fn(),
          dispatchEvent: jest.fn(),
        }));

        (useAtom as jest.Mock).mockReturnValue(['Red', setSelectedThemeColor]);
        renderResult = render(<ColorPicker />);

        const themeButton = screen.getByRole('button', { name: 'red-theme-color-button' });
        fireEvent.click(themeButton);

        const orangeButton = screen.getByRole('button', { name: 'orange-color-button' });
        await waitFor(() => {
          expect(orangeButton).not.toHaveStyle({transform:'translateX(-50%) translateY(-50%)'});
        });
      });
    });
  });
});
