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

    it('should render the bear-wrapper element', () => {
      expect(screen.getByTestId('bear-wrapper')).toBeInTheDocument();
    });

    it('should render the bear-left-ear element', () => {
      expect(screen.getByTestId('bear-left-ear')).toBeInTheDocument();
    });

    it('should render the bear-right-ear element', () => {
      expect(screen.getByTestId('bear-right-ear')).toBeInTheDocument();
    });

    it('should render the bear-left-eye element', () => {
      expect(screen.getByTestId('bear-left-eye')).toBeInTheDocument();
    });

    it('should render the bear-right-eye element', () => {
      expect(screen.getByTestId('bear-right-eye')).toBeInTheDocument();
    });

    it('should render the bear-nose element', () => {
      expect(screen.getByTestId('bear-nose')).toBeInTheDocument();
    });

    it('should render the bear-shadow element', () => {
      expect(screen.getByTestId('bear-shadow')).toBeInTheDocument();
    });

    it('should position center', () => {
      expect(screen.getByTestId('bear-wrapper')).toHaveClass('top-1/2');
      expect(screen.getByTestId('bear-wrapper')).toHaveClass('left-1/2');
    });

    it('should be bigger than default', () => {
      expect(screen.getByTestId('bear-wrapper')).toHaveClass('scale-150');
    });
  });

  describe('when isClicked is true', () => {
    let renderResult: RenderResult;

    beforeEach(() => {
      renderResult = render(<Bear isClicked setIsClicked={jest.fn()} />);
    });

    afterEach(() => {
      renderResult.unmount();
    });

    it('should position right-bottom corner', () => {
      expect(screen.getByTestId('bear-wrapper')).toHaveClass('top-[85%]');
      expect(screen.getByTestId('bear-wrapper')).toHaveClass('left-[92%]');
    });

    it('should be default size', () => {
      expect(screen.getByTestId('bear-wrapper')).toHaveClass('scale-100');
    });
  });

  describe('when button is clicked', () => {
    it('should update isClicked from false to true', () => {
      const setIsClickedMock = jest.fn();
      render(<Bear isClicked={false} setIsClicked={setIsClickedMock} />);

      // click the button
      fireEvent.click(screen.getByRole('button'));

      // verify that the setIsClicked is called correctly
      expect(setIsClickedMock).toHaveBeenCalledTimes(1);
      expect(setIsClickedMock).toHaveBeenCalledWith(true);
    });

    it('should update isClicked from true to false', () => {
      const setIsClickedMock = jest.fn();
      render(<Bear isClicked setIsClicked={setIsClickedMock} />);

      // click the button
      fireEvent.click(screen.getByRole('button'));

      // verify that the setIsClicked is called correctly
      expect(setIsClickedMock).toHaveBeenCalledTimes(1);
      expect(setIsClickedMock).toHaveBeenCalledWith(false);
    });
  });
});
