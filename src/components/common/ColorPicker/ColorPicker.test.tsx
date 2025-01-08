import { fireEvent, render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';
import ColorPicker from './ColorPicker';

import type { RenderResult } from '@testing-library/react';

describe('src/components/common/ColorPicker/ColorPicker.test.tsx', () => {
  describe('when the pathname is exception', () => {
    it.each(['/', '/ja', '/about', '/ja/about'])(
      'should not display the button element for excluded path: %s',
      (pathname: string) => {
        render(<ColorPicker pathname={pathname} />);
        expect(screen.queryByRole('button')).not.toBeInTheDocument();
      }
    );
  });

  describe('when the pathname is non-exception', () => {
    let renderResult: RenderResult;

    beforeEach(() => {
      renderResult = render(<ColorPicker pathname="/experience" />);
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
    });
  });
});
