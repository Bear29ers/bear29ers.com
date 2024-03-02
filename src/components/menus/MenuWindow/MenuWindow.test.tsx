import { render, screen, waitFor } from '@testing-library/react';

import MenuWindow from './MenuWindow';

import type { RenderResult } from '@testing-library/react';

describe('src/components/menus/MenuWindow/MenuWindow.test.tsx', () => {
  describe('when isOpen props is false', () => {
    let renderResult: RenderResult;

    beforeEach(() => {
      renderResult = render(<MenuWindow isOpen={false} />);
    });

    afterEach(() => {
      renderResult.unmount();
    });

    it('should render the MenuWindow component', () => {
      expect(screen.getByTestId('menu-window')).toBeInTheDocument();
    });

    it('should have 56px of width style', () => {
      expect(screen.getByTestId('menu-window')).toHaveStyle('width: 56px');
    });

    it('should have 56px of height style', () => {
      expect(screen.getByTestId('menu-window')).toHaveStyle('height: 56px');
    });

    it('should have 0px of top style', () => {
      expect(screen.getByTestId('menu-window')).toHaveStyle('top: 0px');
    });

    it('should have 0px of right op style', () => {
      expect(screen.getByTestId('menu-window')).toHaveStyle('right: 0px');
    });
  });

  describe('when isOpen props is true', () => {
    let renderResult: RenderResult;

    beforeEach(() => {
      renderResult = render(<MenuWindow isOpen />);
    });

    afterEach(() => {
      renderResult.unmount();
    });

    it('should render the MenuWindow component', () => {
      expect(screen.getByTestId('menu-window')).toBeInTheDocument();
    });

    it('should have 500px of width style', async () => {
      await waitFor(() => {
        expect(screen.getByTestId('menu-window')).toHaveStyle('width: 500px');
      });
    });

    it('should have 650px of height style', async () => {
      await waitFor(() => {
        expect(screen.getByTestId('menu-window')).toHaveStyle('height: 650px');
      });
    });

    it('should have -15px of top style', async () => {
      await waitFor(() => {
        expect(screen.getByTestId('menu-window')).toHaveStyle('top: -15px');
      });
    });

    it('should have -15px of right op style', async () => {
      await waitFor(() => {
        expect(screen.getByTestId('menu-window')).toHaveStyle('right: -15px');
      });
    });
  });
});
