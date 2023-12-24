import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import Bear from './Bear';

import type { RenderResult } from '@testing-library/react';

describe('src/components/Bear/Bear.test.tsx', () => {
  const setIsClickedMock = jest.fn();
  let renderResult: RenderResult;

  beforeEach(() => {
    renderResult = render(<Bear setIsClicked={setIsClickedMock} />);
  });

  afterEach(() => {
    renderResult.unmount();
  });

  it('should render the Bear component with the button element', () => {
    expect(renderResult.getByRole('button')).toBeInTheDocument();
  });

  it('should render the Bear component with the left-ear element', () => {
    expect(renderResult.getByTestId('left-ear')).toBeInTheDocument();
  });

  it('should render the Bear component with the right-ear element', () => {
    expect(renderResult.getByTestId('right-ear')).toBeInTheDocument();
  });

  it('should render the Bear component with the left-eye element', () => {
    expect(renderResult.getByTestId('left-eye')).toBeInTheDocument();
  });

  it('should render the Bear component with the right-eye element', () => {
    expect(renderResult.getByTestId('right-eye')).toBeInTheDocument();
  });

  it('should render the Bear component with the nose element', () => {
    expect(renderResult.getByTestId('nose')).toBeInTheDocument();
  });

  it('should render the Bear component with the shadow element', () => {
    expect(renderResult.getByTestId('shadow')).toBeInTheDocument();
  });

  it('should called props function when the button element clicked', () => {
    const buttonElement = renderResult.getByRole('button');
    fireEvent.click(buttonElement);
    expect(setIsClickedMock).toHaveBeenCalledTimes(1);
  });
});
