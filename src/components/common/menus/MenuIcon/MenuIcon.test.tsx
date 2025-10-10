import { fireEvent, render, screen } from '@testing-library/react';

import MenuIcon from './MenuIcon';

import type { RenderResult } from '@testing-library/react';

describe('src/components/common/menus/MenuIcon/MenuIcon.test.tsx', () => {
  describe('when isOpen props is false', () => {
    let renderResult: RenderResult;

    beforeEach(() => {
      renderResult = render(<MenuIcon isOpen={false} setIsOpen={jest.fn()} />);
    });

    afterEach(() => {
      renderResult.unmount();
    });

    it('should render the button element', () => {
      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('should not have translate-x-10 with the menu-icon-top-line elment', () => {
      expect(screen.getByTestId('menu-icon-top-line')).not.toHaveClass('translate-x-10');
    });

    it('should not have translate-x-10 with the menu-icon-middle-line elment', () => {
      expect(screen.getByTestId('menu-icon-middle-line')).not.toHaveClass('translate-x-10');
    });

    it('should not have translate-x-10 with the menu-icon-bottom-line elment', () => {
      expect(screen.getByTestId('menu-icon-bottom-line')).not.toHaveClass('translate-x-10');
    });

    it('should not have translate-x-0 with the menu-icon-close elment', () => {
      expect(screen.getByTestId('menu-icon-close')).not.toHaveClass('translate-x-0');
    });

    it('should not have rotate-45 with the menu-icon-close-top elment', () => {
      expect(screen.getByTestId('menu-icon-close-top')).not.toHaveClass('rotate-45');
    });

    it('should not have -rotate-45 with the menu-icon-close-bottom elment', () => {
      expect(screen.getByTestId('menu-icon-close-bottom')).not.toHaveClass('-rotate-45');
    });
  });

  describe('when isOpen props is true', () => {
    let renderResult: RenderResult;

    beforeEach(() => {
      renderResult = render(<MenuIcon isOpen setIsOpen={jest.fn()} />);
    });

    afterEach(() => {
      renderResult.unmount();
    });

    it('should not have translate-x-10 with the menu-icon-top-line elment', () => {
      expect(screen.getByTestId('menu-icon-top-line')).toHaveClass('translate-x-10');
    });

    it('should not have translate-x-10 with the menu-icon-middle-line elment', () => {
      expect(screen.getByTestId('menu-icon-middle-line')).toHaveClass('translate-x-10');
    });

    it('should not have translate-x-10 with the menu-icon-bottom-line elment', () => {
      expect(screen.getByTestId('menu-icon-bottom-line')).toHaveClass('translate-x-10');
    });

    it('should not have translate-x-0 with the menu-icon-close elment', () => {
      expect(screen.getByTestId('menu-icon-close')).toHaveClass('translate-x-0');
    });

    it('should not have rotate-45 with the menu-icon-close-top elment', () => {
      expect(screen.getByTestId('menu-icon-close-top')).toHaveClass('rotate-45');
    });

    it('should not have -rotate-45 with the menu-icon-close-bottom elment', () => {
      expect(screen.getByTestId('menu-icon-close-bottom')).toHaveClass('-rotate-45');
    });
  });

  describe('when button is clicked', () => {
    it('should update isOpen from false to true and apply correct classes', () => {
      const setIsOpenMock = jest.fn();
      const { rerender } = render(<MenuIcon isOpen={false} setIsOpen={setIsOpenMock} />);

      fireEvent.click(screen.getByRole('button'));

      expect(setIsOpenMock).toHaveBeenCalledWith(true);

      // Re-render with the new prop to check class changes
      rerender(<MenuIcon isOpen setIsOpen={setIsOpenMock} />);

      expect(screen.getByTestId('menu-icon-top-line')).toHaveClass('translate-x-10');
      expect(screen.getByTestId('menu-icon-middle-line')).toHaveClass('translate-x-10');
      expect(screen.getByTestId('menu-icon-bottom-line')).toHaveClass('translate-x-10');
      expect(screen.getByTestId('menu-icon-close')).toHaveClass('translate-x-0');
      expect(screen.getByTestId('menu-icon-close-top')).toHaveClass('rotate-45');
      expect(screen.getByTestId('menu-icon-close-bottom')).toHaveClass('-rotate-45');
    });

    it('should update isOpen from true to false and apply correct classes', () => {
      const setIsOpenMock = jest.fn();
      const { rerender } = render(<MenuIcon isOpen setIsOpen={setIsOpenMock} />);

      fireEvent.click(screen.getByRole('button'));

      expect(setIsOpenMock).toHaveBeenCalledWith(false);

      // Re-render with the new prop to check class changes
      rerender(<MenuIcon isOpen={false} setIsOpen={setIsOpenMock} />);

      expect(screen.getByTestId('menu-icon-top-line')).not.toHaveClass('translate-x-10');
      expect(screen.getByTestId('menu-icon-middle-line')).not.toHaveClass('translate-x-10');
      expect(screen.getByTestId('menu-icon-bottom-line')).not.toHaveClass('translate-x-10');
      expect(screen.getByTestId('menu-icon-close')).not.toHaveClass('translate-x-0');
      expect(screen.getByTestId('menu-icon-close-top')).not.toHaveClass('rotate-45');
      expect(screen.getByTestId('menu-icon-close-bottom')).not.toHaveClass('-rotate-45');
    });
  });
});
