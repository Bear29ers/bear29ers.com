import { fireEvent, render, screen } from '@testing-library/react';
import '@/hooks/useMediaQuery/useMediaQueryMock';
import { motionValue, useSpring } from 'motion/react';

import useMediaQuery from '@/hooks/useMediaQuery/useMediaQuery';

import { ICON_SIZE_LG, ICON_SIZE_SM, SKILL_ICONS_LG, SKILL_ICONS_MD, SKILL_ICONS_SM } from '@/constants/skillIcons';

import Skills, { Square } from './Skills';

import type { RenderResult } from '@testing-library/react';

jest.mock('@/hooks/useMediaQuery/useMediaQuery');
jest.mock('motion/react', () => ({
  ...jest.requireActual('motion/react'),
  useSpring: jest.fn(),
}));

describe('src/components/ui/Skills/Skills.test.tsx', () => {
  describe('Skills component', () => {
    let renderResult: RenderResult;

    afterEach(() => {
      renderResult.unmount();
    });

    it('should render the Skills component', () => {
      (useMediaQuery as jest.Mock).mockReturnValue(false);
      renderResult = render(<Skills />);
      expect(screen.getByTestId('skills')).toBeInTheDocument();
    });

    it('should render the correct number of squares based on the icon list', () => {
      (useMediaQuery as jest.Mock).mockReturnValue(false);
      renderResult = render(<Skills />);
      const squares = screen.getAllByTestId(/^square-\d+-\d+$/);
      const expectedCount = SKILL_ICONS_LG.reduce((acc, row) => acc + row.icons.length, 0);
      expect(squares).toHaveLength(expectedCount);
    });

    it('should set a square to active onDragStart', () => {
      (useMediaQuery as jest.Mock).mockReturnValue(false);
      renderResult = render(<Skills />);
      const square = screen.getByTestId('square-0-0');
      fireEvent.dragStart(square);
      const activeSquare = screen.getByTestId('square-0-0');
      expect(activeSquare).toHaveStyle('z-index: 1');
    });
  });

  describe('Square component', () => {
    const mockProps = {
      item: { column: 1, component: () => <div data-testid="mock-component">Mock</div> },
      active: { row: 0, col: 0 },
      setActive: jest.fn(),
      colIndex: 0,
      rowIndex: 0,
      numberOfColumns: 10,
      x: motionValue(10),
      y: motionValue(20),
      size: 60,
      gap: 15,
    };

    beforeEach(() => {
      (useSpring as jest.Mock).mockImplementation((value) => value);
    });

    it('should render with correct initial styles and content', () => {
      render(<Square {...mockProps} />);
      const square = screen.getByTestId('square-0-0');
      expect(square).toHaveStyle('top: 0px');
      expect(square).toHaveStyle('left: 0px');
      expect(square).toHaveStyle('width: 60px');
      expect(square).toHaveStyle('height: 60px');
      expect(screen.getByTestId('mock-component')).toBeInTheDocument();
    });

    it('should have a zIndex of 1 when active', () => {
      render(<Square {...mockProps} />);
      const square = screen.getByTestId('square-0-0');
      expect(square).toHaveStyle('z-index: 1');
    });

    it('should have a zIndex of 0 when not active', () => {
      const props = { ...mockProps, active: { row: 1, col: 1 } };
      render(<Square {...props} />);
      const square = screen.getByTestId('square-0-0');
      expect(square).toHaveStyle('z-index: 0');
    });

    it('should apply spring animation values when not active', () => {
      const props = { ...mockProps, active: { row: 1, col: 1 } };
      render(<Square {...props} />);
      const square = screen.getByTestId('square-0-0');
      expect(square.style.transform).toContain('translateX(10px) translateY(20px)');
    });
  });

  describe('Responsive behavior', () => {
    let renderResult: RenderResult;

    afterEach(() => {
      renderResult.unmount();
    });

    it('should use small icons and gap on small screens', () => {
      (useMediaQuery as jest.Mock).mockImplementation((query) => {
        if (query === '(max-width: 399px)') return true;
        if (query === '(max-width: 699px)') return true;
        if (query === '(max-width: 799px)') return true;
        return false;
      });
      renderResult = render(<Skills />);
      const squares = screen.getAllByTestId(/^square-\d+-\d+$/);
      const expectedCount = SKILL_ICONS_SM.reduce((acc, row) => acc + row.icons.length, 0);
      expect(squares).toHaveLength(expectedCount);
      expect(squares[0]).toHaveStyle(`width: ${ICON_SIZE_SM}px`);
    });

    it('should use medium icons on medium screens', () => {
      (useMediaQuery as jest.Mock).mockImplementation((query) => {
        if (query === '(max-width: 399px)') return false;
        if (query === '(max-width: 699px)') return true;
        if (query === '(max-width: 799px)') return true;
        return false;
      });
      renderResult = render(<Skills />);
      const squares = screen.getAllByTestId(/^square-\d+-\d+$/);
      const expectedCount = SKILL_ICONS_MD.reduce((acc, row) => acc + row.icons.length, 0);
      expect(squares).toHaveLength(expectedCount);
      expect(squares[0]).toHaveStyle(`width: ${ICON_SIZE_SM}px`);
    });

    it('should use large icons and gap on large screens', () => {
      (useMediaQuery as jest.Mock).mockReturnValue(false);
      renderResult = render(<Skills />);
      const squares = screen.getAllByTestId(/^square-\d+-\d+$/);
      const expectedCount = SKILL_ICONS_LG.reduce((acc, row) => acc + row.icons.length, 0);
      expect(squares).toHaveLength(expectedCount);
      expect(squares[0]).toHaveStyle(`width: ${ICON_SIZE_LG}px`);
    });
  });
});
