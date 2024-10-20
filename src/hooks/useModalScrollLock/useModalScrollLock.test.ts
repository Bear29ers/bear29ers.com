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
      // eslint-disable-next-line jest-dom/prefer-to-have-style
      expect(document.body.style.paddingInlineEnd).toBe(`${expectedScrollBarHeight}px`);
    });
  });
});
