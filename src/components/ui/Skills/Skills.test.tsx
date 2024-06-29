import { render, screen, waitFor } from '@testing-library/react';
import '@/common/hooks/useMediaQueryMock';
import { motionValue } from 'framer-motion';

import {
  ICON_GAP_LG,
  ICON_GAP_SM,
  ICON_SIZE_LG,
  ICON_SIZE_SM,
  SKILL_ICONS_LG,
  SKILL_ICONS_MD,
  SKILL_ICONS_SM,
} from '@/common/constants/skillIcons';
import useMediaQuery from '@/common/hooks/useMediaQuery';

import Skills, { Square } from './Skills';

import type { RenderResult } from '@testing-library/react';

jest.mock('../../../common/hooks/useMediaQuery.ts');

describe('src/components/ui/Skills/Skills.test.tsx', () => {
  describe('Skills component', () => {
    let renderResult: RenderResult;

    beforeEach(() => {
      renderResult = render(<Skills />);
    });

    afterEach(() => {
      renderResult.unmount();
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
        numberOfColumns: 10,
        x: motionValue(0),
        y: motionValue(0),
        size: 60,
        gap: 15,
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
        numberOfColumns: 10,
        x: motionValue(0),
        y: motionValue(0),
        size: 60,
        gap: 15,
      };

      render(<Square {...props} />);

      const squareElement = screen.getByTestId('square-5-9');
      expect(squareElement).toBeInTheDocument();
    });
  });

  describe('Icon gap tests', () => {
    it('should set iconGap to ICON_GAP_SM when screen size is under 399px', async () => {
      (useMediaQuery as jest.Mock).mockImplementation((query: string) => {
        if (query === '(max-width: 399px)') return true;
        return false;
      });

      render(<Skills />);

      await waitFor(() => {
        const squares = screen.getAllByTestId(/^square-/);

        if (!squares[0] || !squares[1]) throw new Error('no squares found');
        const firstSquare: HTMLElement = squares[0];
        const secondSquare: HTMLElement = squares[1];
        const gap = parseInt(secondSquare.style.left, 10) - parseInt(firstSquare.style.left, 10) - ICON_SIZE_LG;
        expect(gap).toBe(ICON_GAP_SM);
      });
    });

    it('should set iconGap to ICON_GAP_LG when screen size is over 400px', async () => {
      (useMediaQuery as jest.Mock).mockImplementation(() => false);

      render(<Skills />);

      await waitFor(() => {
        const squares = screen.getAllByTestId(/^square-/);

        if (!squares[0] || !squares[1]) throw new Error('no squares found');
        const firstSquare: HTMLElement = squares[0];
        const secondSquare: HTMLElement = squares[1];
        const gap = parseInt(secondSquare.style.left, 10) - parseInt(firstSquare.style.left, 10) - ICON_SIZE_LG;
        expect(gap).toBe(ICON_GAP_LG);
      });
    });
  });

  describe('Icon size tests', () => {
    it('should set iconSize to ICON_SIZE_SM when screen size is under 699px', async () => {
      (useMediaQuery as jest.Mock).mockImplementation((query: string) => {
        if (query === '(max-width: 799px)') return true;
        return false;
      });

      render(<Skills />);

      const square = screen.getAllByTestId(/^square-/)[0];

      await waitFor(() => {
        expect(square).toHaveStyle(`width: ${ICON_SIZE_SM}px`);
      });

      await waitFor(() => {
        expect(square).toHaveStyle(`height: ${ICON_SIZE_SM}px`);
      });
    });

    it('should set iconSize to ICON_SIZE_LG when screen size is over 700px', async () => {
      (useMediaQuery as jest.Mock).mockImplementation(() => false);

      render(<Skills />);

      const square = screen.getAllByTestId(/^square-/)[0];

      await waitFor(() => {
        expect(square).toHaveStyle(`width: ${ICON_SIZE_LG}px`);
      });

      await waitFor(() => {
        expect(square).toHaveStyle(`height: ${ICON_SIZE_LG}px`);
      });
    });
  });

  describe('Icon list tests', () => {
    it('should set iconList to SKILL_ICONS_SM when screen size is under 399px', async () => {
      (useMediaQuery as jest.Mock).mockImplementation((query: string) => {
        if (query === '(max-width: 399px)') return true;
        return false;
      });

      render(<Skills />);

      await waitFor(() => {
        const squares = screen.getAllByTestId(/^square-/);
        expect(squares).toHaveLength(SKILL_ICONS_SM.reduce((acc, row) => acc + row.icons.length, 0));
      });
    });

    it('should set iconList to SKILL_ICONS_MD when screen size is between 399px and 699px', async () => {
      (useMediaQuery as jest.Mock).mockImplementation((query: string) => {
        if (query === '(max-width: 399px)') return false;
        if (query === '(max-width: 699px)') return true;
        return false;
      });

      render(<Skills />);

      await waitFor(() => {
        const squares = screen.getAllByTestId(/^square-/);
        expect(squares).toHaveLength(SKILL_ICONS_MD.reduce((acc, row) => acc + row.icons.length, 0));
      });
    });

    it('should set iconList to SKILL_ICONS_LG when screen size is over 699px', async () => {
      (useMediaQuery as jest.Mock).mockImplementation(() => false);

      render(<Skills />);

      await waitFor(() => {
        const squares = screen.getAllByTestId(/^square-/);
        expect(squares).toHaveLength(SKILL_ICONS_LG.reduce((acc, row) => acc + row.icons.length, 0));
      });
    });
  });
});
