import React from 'react';

import { render } from '@testing-library/react';

import { LanguagesTools, Square } from './LanguagesTools';

describe('src/components/LanguagesTools/LanguagesTools.test.tsx', () => {
  it('should render LanguagesTools component', () => {
    const { getByTestId } = render(<LanguagesTools />);
    expect(getByTestId('languages-tools')).toBeInTheDocument();
  });

  it('should have correct number of squares', () => {
    const { getAllByTestId } = render(<LanguagesTools />);
    expect(getAllByTestId(/^square-\d+-\d+$/)).toHaveLength(56);
  });

  describe('Square component', () => {
    it('should render Square component', () => {
      const props = {
        item: { component: () => <div>MockedComponent</div> },
        active: { row: 0, col: 0 },
        setActive: jest.fn(),
        colIndex: 0,
        rowIndex: 0,
        x: 0,
        y: 0,
      };

      const { getByTestId } = render(<Square {...props} />);

      const squareElement = getByTestId('square-0-0');
      expect(squareElement).toBeInTheDocument();
      expect(squareElement).toHaveStyle('top: 0');
      expect(squareElement).toHaveStyle('left: 0');
    });

    it('should render another Square component', () => {
      const props = {
        item: { component: () => <div>MockedComponent</div> },
        active: { row: 2, col: 3 },
        setActive: jest.fn(),
        colIndex: 2,
        rowIndex: 3,
        x: 0,
        y: 0,
      };

      const { getByTestId } = render(<Square {...props} />);

      const squareElement = getByTestId('square-3-2');
      expect(squareElement).toBeInTheDocument();
    });
  });
});
