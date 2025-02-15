import { render, screen } from '@testing-library/react';

import GithubIcon from './GithubIcon';

import type { RenderResult } from '@testing-library/react';

describe('src/components/icons/GithubIcon/GithubIcon.test.tsx', () => {
  describe('when darkMode props is false', () => {
    let renderResult: RenderResult;

    beforeEach(() => {
      renderResult = render(<GithubIcon lightMode={false} />);
    });

    afterEach(() => {
      renderResult.unmount();
    });

    it('should render the GithubIcon component', () => {
      expect(screen.getByRole('img', { name: 'GithubIcon' })).toBeInTheDocument();
    });

    it('should have style that fill is #D2D8D9', () => {
      expect(screen.getByRole('img', { name: 'GithubIcon' }).querySelector('path')).toHaveStyle('fill: #D2D8D9');
    });
  });

  describe('when darkMode props is true', () => {
    let renderResult: RenderResult;

    beforeEach(() => {
      renderResult = render(<GithubIcon lightMode />);
    });

    afterEach(() => {
      renderResult.unmount();
    });

    it('should render the GithubIcon component', () => {
      expect(screen.getByRole('img', { name: 'GithubIcon' })).toBeInTheDocument();
    });

    it('should have style that fill is #000', () => {
      expect(screen.getByRole('img', { name: 'GithubIcon' }).querySelector('path')).toHaveStyle('fill: #000');
    });
  });
});
