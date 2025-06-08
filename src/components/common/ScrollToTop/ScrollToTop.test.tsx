import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import ScrollToTop from './ScrollToTop';

import type { RenderResult } from '@testing-library/react';

// window.scrollToのモック
const scrollToMock = jest.fn();
// Object.defineProperty(window, 'scrollTo', { value: scrollToMock });

// IntersectionObserverのモック（motion/reactのため）
const mockIntersectionObserver = jest.fn();
mockIntersectionObserver.mockReturnValue({
  observe: () => null,
  unobserve: () => null,
  disconnect: () => null,
});
window.IntersectionObserver = mockIntersectionObserver;

describe('src/components/ui/gallery/ScrollToTop/ScrollToTop.test.tsx', () => {
  let renderResult: RenderResult;

  beforeEach(() => {
    renderResult = render(<ScrollToTop />);

    // 各テスト前にscrollYをリセット
    Object.defineProperty(window, 'scrollY', { value: 0, writable: true });
    // document.documentElement.scrollToのモック
    document.documentElement.scrollTo = scrollToMock;
  });

  afterEach(() => {
    renderResult.unmount();
  });

  it('should not display the ScrollToTop button in the initial state', () => {
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  it('should display the ScrollToTop button when scroll position is over 101px', () => {
    // スクロール位置を101pxに設定
    Object.defineProperty(window, 'scrollY', { value: 101 });
    fireEvent.scroll(window);

    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should been called scrollTo when the button is clicked', () => {
    Object.defineProperty(window, 'scrollY', { value: 101 });
    fireEvent.scroll(window);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(scrollToMock).toHaveBeenCalledWith({
      top: 0,
      behavior: 'smooth',
    });
  });
});
