import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Bear from './Bear';

import type { RenderResult } from '@testing-library/react';

describe('src/components/Bear/Bear.test.tsx', () => {
  describe('when isClicked is false', () => {
    let renderResult: RenderResult;

    beforeEach(() => {
      renderResult = render(<Bear isClicked={false} setIsClicked={jest.fn()} />);
    });

    afterEach(() => {
      renderResult.unmount();
    });

    it('should render the left-ear element', () => {
      expect(screen.getByTestId('left-ear')).toBeInTheDocument();
    });

    it('should render the right-ear element', () => {
      expect(screen.getByTestId('right-ear')).toBeInTheDocument();
    });

    it('should render the left-eye element', () => {
      expect(screen.getByTestId('left-eye')).toBeInTheDocument();
    });

    it('should render the right-eye element', () => {
      expect(screen.getByTestId('right-eye')).toBeInTheDocument();
    });

    it('should render the nose element', () => {
      expect(screen.getByTestId('nose')).toBeInTheDocument();
    });

    it('should render the shadow element', () => {
      expect(screen.getByTestId('shadow')).toBeInTheDocument();
    });
  });

  describe('when button is clicked', () => {
    it('should clicking the button toggles isClicked state', () => {
      const setIsClickedMock = jest.fn();
      render(<Bear isClicked={false} setIsClicked={setIsClickedMock} />);

      // click the button
      fireEvent.click(screen.getByRole('button'));

      // verify that the setIsClicked is called correctly
      expect(setIsClickedMock).toHaveBeenCalledTimes(1);
      expect(setIsClickedMock).toHaveBeenCalledWith(true);
    });
  });
});
