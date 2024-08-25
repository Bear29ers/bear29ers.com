import { render, screen, waitFor } from '@testing-library/react';

import MenuWindow from './MenuWindow';

import type { RenderResult } from '@testing-library/react';

describe('src/components/common/menus/MenuWindow/MenuWindow.test.tsx', () => {
  const pathname = '/about';

  describe('when isOpen props is false', () => {
    let renderResult: RenderResult;

    beforeEach(() => {
      renderResult = render(<MenuWindow isOpen={false} isMobile={false} pathname={pathname} />);
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

  describe('when isMobile props is true', () => {
    let renderResult: RenderResult;

    beforeEach(() => {
      renderResult = render(<MenuWindow isOpen={false} isMobile pathname={pathname} />);
    });

    afterEach(() => {
      renderResult.unmount();
    });

    it('should render the MenuWindow component', () => {
      expect(screen.getByTestId('menu-window')).toBeInTheDocument();
    });

    it('should have 56px of width style', () => {
      expect(screen.getByTestId('menu-window')).toHaveStyle('width: 48px');
    });

    it('should have 56px of height style', () => {
      expect(screen.getByTestId('menu-window')).toHaveStyle('height: 48px');
    });
  });

  describe('when isOpen props is true', () => {
    let renderResult: RenderResult;

    beforeEach(() => {
      renderResult = render(<MenuWindow isOpen isMobile={false} pathname={pathname} />);
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

  describe('when isOpen and isMobile props are true', () => {
    let renderResult: RenderResult;

    beforeEach(() => {
      renderResult = render(<MenuWindow isOpen isMobile pathname={pathname} />);
    });

    afterEach(() => {
      renderResult.unmount();
    });

    it('should have 310px of width style', async () => {
      await waitFor(() => {
        expect(screen.getByTestId('menu-window')).toHaveStyle('width: 310px');
      });
    });

    it('should have 500px of height style', async () => {
      await waitFor(() => {
        expect(screen.getByTestId('menu-window')).toHaveStyle('height: 500px');
      });
    });

    it('should have -10px of top style', async () => {
      await waitFor(() => {
        expect(screen.getByTestId('menu-window')).toHaveStyle('top: -10px');
      });
    });

    it('should have -8px of right op style', async () => {
      await waitFor(() => {
        expect(screen.getByTestId('menu-window')).toHaveStyle('right: -8px');
      });
    });
  });
});
