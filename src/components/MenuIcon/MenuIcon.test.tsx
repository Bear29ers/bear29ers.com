/* eslint-disable @typescript-eslint/no-empty-function */

import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import MenuIcon from './MenuIcon';

describe('src/components/MenuIcon/MenuIcon.test.tsx', () => {
  it('should render the MenuIcon component with the button element', () => {
    const { getByRole } = render(<MenuIcon menuIsActive={false} setMenuIsActive={() => {}} />);
    expect(getByRole('button')).toBeInTheDocument();
  });

  it('should calls setMenuIsActive when the button is clicked', () => {
    const setMenuIsActiveMock = jest.fn();
    const { getByRole } = render(<MenuIcon menuIsActive={false} setMenuIsActive={setMenuIsActiveMock} />);
    const buttonElement = getByRole('button');

    fireEvent.click(buttonElement);
    expect(setMenuIsActiveMock).toHaveBeenCalled();
  });

  it('should toggle menuIsActive state when the button is clicked', () => {
    const { getAllByTestId } = render(<MenuIcon menuIsActive setMenuIsActive={() => {}} />);

    const lineElements = getAllByTestId('menu-icon-line');
    lineElements.forEach((lineElement) => {
      expect(lineElement).toHaveClass('translate-x-10');
    });
  });

  // TODO: useStateのテスト
});
