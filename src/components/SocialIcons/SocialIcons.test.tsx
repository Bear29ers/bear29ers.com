import React from 'react';

import { render, screen, waitFor } from '@testing-library/react';
import '@/common/hooks/useMediaQueryMock';

import useMediaQuery from '@/common/hooks/useMediaQuery';

import SocialIcons from './SocialIcons';

import type { RenderResult } from '@testing-library/react';

jest.mock('../../common/hooks/useMediaQuery.ts');

describe('src/components/SocialIcons/SocialIcons.test.tsx', () => {
  describe('when darkMode props is false', () => {
    let renderResult: RenderResult;

    beforeEach(() => {
      renderResult = render(<SocialIcons lightMode={false} />);
    });

    afterEach(() => {
      renderResult.unmount();
    });

    it('should render the GithubIcon component', () => {
      expect(screen.getByRole('img', { name: 'GithubIcon' })).toBeInTheDocument();
    });

    it('should have style that fill is #D2D8D9 with the GithubIcon component', () => {
      expect(screen.getByRole('img', { name: 'GithubIcon' }).querySelector('path')).toHaveStyle('fill: #D2D8D9');
    });

    it('should render the InstagramIcon component', () => {
      expect(screen.getByRole('img', { name: 'InstagramIcon' })).toBeInTheDocument();
    });

    it('should render the FacebookIcon component', () => {
      expect(screen.getByRole('img', { name: 'FacebookIcon' })).toBeInTheDocument();
    });

    it('should render the ThreadsIcon component', () => {
      expect(screen.getByRole('img', { name: 'ThreadsIcon' })).toBeInTheDocument();
    });

    it('should have style that icon background fill is #D2D8D9 with the ThreadsIcon component', () => {
      expect(screen.getByTestId('threads-background')).toHaveStyle('fill: #D2D8D9');
    });

    it('should have style that icon logo fill is #000 with the ThreadsIcon component', () => {
      expect(screen.getByTestId('threads-logo')).toHaveStyle('fill: #000');
    });
  });

  describe('when darkMode props is true', () => {
    let renderResult: RenderResult;

    beforeEach(() => {
      renderResult = render(<SocialIcons lightMode />);
    });

    afterEach(() => {
      renderResult.unmount();
    });

    it('should render the GithubIcon component', () => {
      expect(screen.getByRole('img', { name: 'GithubIcon' })).toBeInTheDocument();
    });

    it('should have style that fill is #000 with the GithubIcon component', () => {
      expect(screen.getByRole('img', { name: 'GithubIcon' }).querySelector('path')).toHaveStyle('fill: #000');
    });

    it('should render the InstagramIcon component', () => {
      expect(screen.getByRole('img', { name: 'InstagramIcon' })).toBeInTheDocument();
    });

    it('should render the FacebookIcon component', () => {
      expect(screen.getByRole('img', { name: 'FacebookIcon' })).toBeInTheDocument();
    });

    it('should render the ThreadsIcon component', () => {
      expect(screen.getByRole('img', { name: 'ThreadsIcon' })).toBeInTheDocument();
    });

    it('should have style that icon background fill is #000 with the ThreadsIcon component', () => {
      expect(screen.getByTestId('threads-background')).toHaveStyle('fill: #000');
    });

    it('should have style that icon logo fill is #D2D8D9 with the ThreadsIcon component', () => {
      expect(screen.getByTestId('threads-logo')).toHaveStyle('fill: #D2D8D9');
    });
  });

  describe('barWidth tests', () => {
    it('should set barWidth to 96px when screen size is under 399px', async () => {
      (useMediaQuery as jest.Mock).mockImplementation((query: string) => {
        if (query === '(max-width: 399px)') return true;
        if (query === '(max-width: 499px)') return true;
        return false;
      });

      render(<SocialIcons lightMode={false} />);

      await waitFor(
        () => {
          const lineElement = screen.getByTestId('icons-line');
          expect(lineElement).toHaveStyle({ width: '96px' });
        },
        { timeout: 2000 }
      );
    });

    it('should set barWidth to 112px when screen size is between 399px and 499px', async () => {
      (useMediaQuery as jest.Mock).mockImplementation((query: string) => {
        if (query === '(max-width: 399px)') return false;
        if (query === '(max-width: 499px)') return true;
        return false;
      });

      render(<SocialIcons lightMode={false} />);

      await waitFor(
        () => {
          const lineElement = screen.getByTestId('icons-line');
          expect(lineElement).toHaveStyle({ width: '112px' });
        },
        { timeout: 2000 }
      );
    });
  });

  it('should set barWidth to 128px when screen size is over 499px', async () => {
    (useMediaQuery as jest.Mock).mockImplementation(() => false);

    render(<SocialIcons lightMode={false} />);

    await waitFor(
      () => {
        const lineElement = screen.getByTestId('icons-line');
        expect(lineElement).toHaveStyle({ width: '128px' });
      },
      { timeout: 2000 }
    );
  });
});
