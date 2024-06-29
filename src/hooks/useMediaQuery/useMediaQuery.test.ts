import { act, renderHook } from '@testing-library/react';

import useMediaQuery from './useMediaQuery';

describe('src/hooks/useMediaQuery/useMediaQuery', () => {
  let matchMedia: jest.Mock;
  let addEventListenerMock: jest.Mock;
  let removeEventListenerMock: jest.Mock;

  beforeAll(() => {
    addEventListenerMock = jest.fn();
    removeEventListenerMock = jest.fn();

    matchMedia = jest.fn().mockImplementation((query: string) => ({
      matches: false,
      media: query,
      addEventListener: addEventListenerMock,
      removeEventListener: removeEventListenerMock,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      dispatchEvent: jest.fn(),
    }));

    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: matchMedia,
    });
  });

  afterEach(() => {
    matchMedia.mockClear();
    addEventListenerMock.mockClear();
    removeEventListenerMock.mockClear();
  });

  it('should return initial matches state based on the media query', () => {
    matchMedia.mockImplementationOnce((query: string) => ({
      matches: false,
      media: query,
      addEventListener: addEventListenerMock,
      removeEventListener: removeEventListenerMock,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      dispatchEvent: jest.fn(),
    }));

    const { result } = renderHook(() => useMediaQuery('(min-width: 600px)'));
    expect(result.current).toBe(false);
  });

  it('should update matches state when media query changes', () => {
    let listenerCallback: ((event: MediaQueryListEvent) => void) | null = null;

    matchMedia.mockImplementationOnce((query: string) => ({
      matches: false,
      media: query,
      addEventListener: (_: string, callback: (mediaQueryListEvent: MediaQueryListEvent) => void) => {
        listenerCallback = callback;
      },
      removeEventListener: removeEventListenerMock,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      dispatchEvent: jest.fn(),
    }));

    const { result } = renderHook(() => useMediaQuery('(min-width: 600px)'));
    expect(result.current).toBe(false);

    // Simulate media query change
    act(() => {
      if (listenerCallback) {
        listenerCallback({ matches: true, media: '(min-width: 600px)' } as MediaQueryListEvent);
      }
    });

    expect(result.current).toBe(true);
  });

  it('should clean up event listeners on unmount', () => {
    const { unmount } = renderHook(() => useMediaQuery('(min-width: 600px)'));
    unmount();

    // removeEventListener が少なくとも1回は呼ばれたことを確認
    expect(removeEventListenerMock).toHaveBeenCalled();

    // 全ての呼び出しが 'change' イベントに対するものであることを確認
    removeEventListenerMock.mock.calls.forEach((call: [string, EventListener]) => {
      expect(call[0]).toBe('change');
    });
  });
});
