import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Skills, { Square } from './Skills';

import type { RenderResult } from '@testing-library/react';

describe('src/components/profiles/Skills/Skills.test.tsx', () => {
  describe('Skills component', () => {
    let renderResult: RenderResult;

    beforeEach(() => {
      renderResult = render(<Skills />);
    });

    afterEach(() => {
      renderResult.unmount();
    });

    it('should render the title', () => {
      expect(screen.getByRole('heading', { level: 3, name: /Skills and Tools/ })).toBeInTheDocument();
    });

    it('should render the Skills component', () => {
      expect(screen.getByTestId('skills')).toBeInTheDocument();
    });

    it('should render 60 Square components', () => {
      expect(screen.getAllByTestId(/^square-\d+-\d+$/)).toHaveLength(60);
    });
  });

  describe('Square component', () => {
    it('should render the Square component with "square-0-0" test id', () => {
      const props = {
        item: { column: 1, component: () => <div>MockedComponent</div> },
        active: { row: 0, col: 0 },
        setActive: jest.fn(),
        colIndex: 0,
        rowIndex: 0,
        x: 0,
        y: 0,
      };

      render(<Square {...props} />);

      const squareElement = screen.getByTestId('square-0-0');
      expect(squareElement).toBeInTheDocument();
      expect(squareElement).toHaveStyle('top: 0');
      expect(squareElement).toHaveStyle('left: 0');
    });

    it('should render the Square component with "square-5-9" test id', () => {
      const props = {
        item: { column: 10, component: () => <div>MockedComponent</div> },
        active: { row: 5, col: 9 },
        setActive: jest.fn(),
        colIndex: 9,
        rowIndex: 5,
        x: 0,
        y: 0,
      };

      render(<Square {...props} />);

      const squareElement = screen.getByTestId('square-5-9');
      expect(squareElement).toBeInTheDocument();
    });
  });
});
