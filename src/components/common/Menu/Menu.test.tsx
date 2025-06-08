import { render, screen } from '@testing-library/react';
import '@/hooks/useMediaQuery/useMediaQueryMock';
import { usePathname } from 'next/navigation';

import Menu from './Menu';

import type { RenderResult } from '@testing-library/react';

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
}));

describe('src/components/common/Menu/Menu.test.tsx', () => {
  let renderResult: RenderResult;
  const mockUsePathname = usePathname as jest.Mock;

  beforeEach(() => {
    // デフォルトのpathnameを設定（除外対象外のパス）
    mockUsePathname.mockReturnValue('/some-page');
  });

  afterEach(() => {
    renderResult?.unmount();
    jest.clearAllMocks();
  });

  describe('Normal rendering', () => {
    beforeEach(() => {
      renderResult = render(<Menu locale="en" />);
    });

    it('should render the button element', () => {
      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('should render the MenuWindow component', () => {
      expect(screen.getByTestId('menu-window')).toBeInTheDocument();
    });
  });

  describe('Menu null rendering', () => {
    it('should return null when pathname is "/"', () => {
      mockUsePathname.mockReturnValue('/');
      const { container } = render(<Menu locale="en" />);
      expect(container).toBeEmptyDOMElement();
    });

    it('should return null when pathname is "/ja"', () => {
      mockUsePathname.mockReturnValue('/ja');
      const { container } = render(<Menu locale="en" />);
      expect(container).toBeEmptyDOMElement();
    });

    it('should render normally when pathname is not in exception list', () => {
      mockUsePathname.mockReturnValue('/about');
      const { container } = render(<Menu locale="en" />);
      expect(container).not.toBeEmptyDOMElement();
      expect(screen.getByRole('button')).toBeInTheDocument();
    });
  });
});
