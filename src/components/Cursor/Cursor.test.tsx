import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Cursor from './Cursor';

import type { RenderResult } from '@testing-library/react';

describe('src/components/Cursor/Cursor.test.tsx', () => {
  let renderResult: RenderResult;

  beforeEach(() => {
    renderResult = render(<Cursor />);
  });

  afterEach(() => {
    renderResult.unmount();
  });

  it('should render the Cursor component without crashing', () => {
    const cursorElement = screen.getByTestId('cursor');
    expect(cursorElement).toBeInTheDocument();
  });
});
