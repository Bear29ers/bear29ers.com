import { render, screen } from '@testing-library/react';

import PageNavigation from './PageNavigation';

import type { RenderResult } from '@testing-library/react';

describe('src/components/ui/PageNavigation/PageNavigation.test.tsx', () => {
  describe('when isClicked props is false', () => {
    let renderResult: RenderResult;

    beforeEach(() => {
      renderResult = render(<PageNavigation isClicked={false} />);
    });

    afterEach(() => {
      renderResult.unmount();
    });

    it('should render the Works text', () => {
      expect(screen.getByText('Works')).toBeInTheDocument();
    });

    it('should render the About link', () => {
      expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument();
    });

    it('should render the Experience link', () => {
      expect(screen.getByRole('link', { name: 'Experience' })).toBeInTheDocument();
    });

    it('should have text-white class with the Experience page link', () => {
      expect(screen.getByRole('link', { name: 'Experience' })).toHaveClass('text-white');
    });

    it('should have text-white class with the About page link', () => {
      expect(screen.getByRole('link', { name: 'About' })).toHaveClass('text-white');
    });

    it('should render the Gallery link', () => {
      expect(screen.getByRole('link', { name: 'Gallery' })).toBeInTheDocument();
    });

    it('should have text-white class with the Gallery page link', () => {
      expect(screen.getByText('Gallery')).toHaveClass('text-white');
    });
  });

  describe('when isClicked props is true', () => {
    let renderResult: RenderResult;

    beforeEach(() => {
      renderResult = render(<PageNavigation isClicked />);
    });

    afterEach(() => {
      renderResult.unmount();
    });

    it('should have text-dark and lg:text-white class with the Experience page link', () => {
      expect(screen.getByRole('link', { name: 'Experience' })).toHaveClass('text-dark lg:text-white');
    });

    it('should have text-dark class with the About page link', () => {
      expect(screen.getByRole('link', { name: 'About' })).toHaveClass('text-dark');
    });

    it('should have text-white and lg:text-dark class with the Gallery page link', () => {
      expect(screen.getByRole('link', { name: 'Gallery' })).toHaveClass('text-white lg:text-dark');
    });
  });
});
