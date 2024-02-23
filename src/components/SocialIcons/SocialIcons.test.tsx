import { render, screen } from '@testing-library/react';

import SocialIcons from './SocialIcons';

import type { RenderResult } from '@testing-library/react';

describe('src/components/SocialIcons/SocialIcons.test.tsx', () => {
  describe('when isClicked props is false', () => {
    let renderResult: RenderResult;

    beforeEach(() => {
      renderResult = render(<SocialIcons isClicked={false} />);
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

  describe('when isClicked props is true', () => {
    let renderResult: RenderResult;

    beforeEach(() => {
      renderResult = render(<SocialIcons isClicked />);
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
});
