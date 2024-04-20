import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import ThreadsIcon from './ThreadsIcon';

import type { RenderResult } from '@testing-library/react';

describe('src/components/icons/ThreadsIcon/ThreadsIcon.test.tsx', () => {
  describe('when darkMode props is false', () => {
    let renderResult: RenderResult;

    beforeEach(() => {
      renderResult = render(<ThreadsIcon lightMode={false} />);
    });

    afterEach(() => {
      renderResult.unmount();
    });

    it('should render the ThreadsIcon component', () => {
      expect(screen.getByRole('img', { name: 'ThreadsIcon' })).toBeInTheDocument();
    });

    it('should have style that icon background fill is #D2D8D9', () => {
      expect(screen.getByTestId('threads-background')).toHaveStyle('fill: #D2D8D9');
    });

    it('should have style that icon logo fill is #000', () => {
      expect(screen.getByTestId('threads-logo')).toHaveStyle('fill: #000');
    });
  });

  describe('when isClicked props is true', () => {
    let renderResult: RenderResult;

    beforeEach(() => {
      renderResult = render(<ThreadsIcon lightMode />);
    });

    afterEach(() => {
      renderResult.unmount();
    });

    it('should render the ThreadsIcon component', () => {
      expect(screen.getByRole('img', { name: 'ThreadsIcon' })).toBeInTheDocument();
    });

    it('should have style that icon background fill is #000', () => {
      expect(screen.getByTestId('threads-background')).toHaveStyle('fill: #000');
    });

    it('should have style that icon logo fill is #D2D8D9', () => {
      expect(screen.getByTestId('threads-logo')).toHaveStyle('fill: #D2D8D9');
    });
  });
});
