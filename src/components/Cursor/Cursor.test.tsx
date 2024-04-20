import { screen, render, fireEvent, waitFor } from '@testing-library/react';
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

  it('should render the Cursor component with mouse movement', async () => {
    const cursorElement = screen.getByTestId('cursor');
    const initialPosition = {
      x: cursorElement.style.left,
      y: cursorElement.style.top,
    };

    fireEvent.mouseMove(document, {
      clientX: 100,
      clinetY: 200,
    });

    await waitFor(() => {
      expect(cursorElement.style.left).not.toBe(initialPosition.x);
    });

    await waitFor(() => {
      expect(cursorElement.style.top).not.toBe(initialPosition.y);
    });
  });
});
