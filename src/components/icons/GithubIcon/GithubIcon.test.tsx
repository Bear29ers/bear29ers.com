import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import GithubIcon from './GithubIcon';

import type { RenderResult } from '@testing-library/react';

describe('src/components/icons/GithubIcon/GithubIcon.test.tsx', () => {
  describe('when isClicked props is false', () => {
    let renderResult: RenderResult;

    beforeEach(() => {
      renderResult = render(<GithubIcon isClicked={false} />);
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

  describe('when isClicked props is true', () => {
    let renderResult: RenderResult;

    beforeEach(() => {
      renderResult = render(<GithubIcon isClicked />);
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
});
