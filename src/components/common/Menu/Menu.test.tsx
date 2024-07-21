import { render, screen } from '@testing-library/react';
import '@/hooks/useMediaQuery/useMediaQueryMock';

import Menu from './Menu';

import type { RenderResult } from '@testing-library/react';

describe('src/components/common/Menu/Menu.test.tsx', () => {
  let renderResult: RenderResult;

  beforeEach(() => {
    renderResult = render(<Menu />);
  });

  afterEach(() => {
    renderResult.unmount();
  });

  it('should render the button element', () => {
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should render the MenuWindow component', () => {
    expect(screen.getByTestId('menu-window')).toBeInTheDocument();
  });
});
