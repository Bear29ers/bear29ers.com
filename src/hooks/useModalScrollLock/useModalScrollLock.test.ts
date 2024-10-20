/* eslint-disable jest-dom/prefer-to-have-style */
import { renderHook } from '@testing-library/react';

import useModalScrollLock from './useModalScrollLock';

describe('src/hooks/useModalScrollLock/useModalScrollLock', () => {
  beforeEach(() => {
    Object.defineProperty(document.documentElement, 'scrollTop', {
      configurable: true,
      value: 1000,
      writable: true,
    });

    Object.defineProperty(document.body, 'clientWidth', {
      configurable: true,
      value: 900, // Set to less than window.innerWidth for a positive scrollbar size
      writable: true,
    });

    Object.defineProperty(window, 'innerWidth', {
      configurable: true,
      value: 1200, // Greater than clientWidth
      writable: true,
    });

    global.scrollTo = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should apply scroll lock when modal is open', () => {
    renderHook(() => useModalScrollLock(true));

    // Assert that body styles are applied for fixed positioning
    expect(document.body).toHaveStyle({ position: 'fixed' });
    expect(document.body.style.insetBlockStart).toBeDefined();
  });

  it('should remove scroll lock when modal is closed', () => {
    renderHook(() => useModalScrollLock(true));
    renderHook(() => useModalScrollLock(false));

    // Assert that body styles are reset
    expect(document.body).toHaveStyle({ position: '' });
    expect(global.scrollTo).toHaveBeenCalled();
  });

  it('should calculate the scrollbar size correctly', () => {
    renderHook(() => useModalScrollLock(true));

    // Scrollbar size should be positive
    const expectedScrollBarWidth = window.innerWidth - document.body.clientWidth;
    expect(document.body).toHaveStyle({ paddingInlineEnd: `${expectedScrollBarWidth}px` });
  });

  it('should handle toggling the modal open and closed', () => {
    const { rerender } = renderHook(({ isOpen }) => useModalScrollLock(isOpen), {
      initialProps: { isOpen: false },
    });

    // Initially, the modal is closed, so no scroll lock
    expect(document.body).toHaveStyle({ position: '' });

    // Re-open the modal, applying the scroll lock
    rerender({ isOpen: true });
    expect(document.body).toHaveStyle({ position: 'fixed' });

    // Close the modal again, removing the scroll lock
    rerender({ isOpen: false });
    expect(document.body).toHaveStyle({ position: '' });
  });

  it('should not apply vertical-specific styles in horizontal writing mode', () => {
    jest.spyOn(window, 'getComputedStyle').mockReturnValue({
      getPropertyValue: (prop: string) => {
        if (prop === 'writingMode') {
          return 'horizontal-tb'; // Mock horizontal writing mode
        }
        return '';
      },
      writingMode: 'horizontal-tb', // Ensure writingMode is set properly
    } as CSSStyleDeclaration);

    renderHook(() => useModalScrollLock(true));

    // Ensure it does not apply vertical-specific styles
    expect(document.body).not.toHaveStyle({ paddingInlineEnd: '100px' });
  });

  it('should remove scroll lock and restore scroll when hook is deactivated', () => {
    const { rerender, unmount } = renderHook(({ isOpen }) => useModalScrollLock(isOpen), {
      initialProps: { isOpen: true },
    });

    // Initially, the modal is open, so the scroll lock is applied
    expect(document.body.style.position).toBe('fixed');

    // When the hook is deactivated, it should clean up
    rerender({ isOpen: false });
    expect(document.body).toHaveStyle({ position: '' });

    // Ensure scroll restoration is called
    expect(global.scrollTo).toHaveBeenCalled();

    // Additional test: Unmount and check cleanup
    unmount();
    expect(document.body).toHaveStyle({ position: '' });
  });

  describe('vertical writing mode', () => {
    beforeEach(() => {
      // Mock window.getComputedStyle to return a CSSStyleDeclaration object with writingMode
      jest.spyOn(window, 'getComputedStyle').mockImplementation(
        (_) =>
          ({
            getPropertyValue: (prop: string) => {
              if (prop === 'writingMode') {
                return 'vertical-lr'; // Mock vertical writing mode
              }
              return '';
            },
            writingMode: 'vertical-lr', // Provide the writingMode property directly
          }) as CSSStyleDeclaration
      );

      // Mock other necessary properties for scroll calculations
      Object.defineProperty(document.body, 'clientHeight', {
        configurable: true,
        value: 800, // Less than window.innerHeight for positive scrollbar size
        writable: true,
      });

      Object.defineProperty(window, 'innerHeight', {
        configurable: true,
        value: 1000, // Greater than clientHeight
        writable: true,
      });
    });

    afterEach(() => {
      jest.restoreAllMocks();
    });

    it('should calculate scrollbar size correctly in vertical writing mode', () => {
      renderHook(() => useModalScrollLock(true));

      // Positive scrollbar size for vertical mode
      const expectedScrollBarHeight = window.innerHeight - document.body.clientHeight;

      expect(document.body.style.paddingInlineEnd).toBe(`${expectedScrollBarHeight}px`);
    });
  });
});
