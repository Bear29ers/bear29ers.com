import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import PageNavigation from './PageNavigation';

import type { RenderResult } from '@testing-library/react';

describe('src/components/PageNavigation/PageNavigation.test.tsx', () => {
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

    it('should have text-dark class with the About link', () => {
      expect(screen.getByRole('link', { name: 'About' })).toHaveClass('text-dark');
    });

    it('should render the Experience text', () => {
      expect(screen.getByText('Experience')).toBeInTheDocument();
    });

    it('should render the Gallery text', () => {
      expect(screen.getByText('Gallery')).toBeInTheDocument();
    });

    it('should have text-dark class with the Gallery text', () => {
      expect(screen.getByText('Gallery')).toHaveClass('text-dark');
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

    it('should render the Works text', () => {
      expect(screen.getByText('Works')).toBeInTheDocument();
    });

    it('should render the About link', () => {
      expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument();
    });

    it('should have text-dark class with the About link', () => {
      expect(screen.getByRole('link', { name: 'About' })).toHaveClass('text-iron');
    });

    it('should render the Experience text', () => {
      expect(screen.getByText('Experience')).toBeInTheDocument();
    });

    it('should render the Gallery text', () => {
      expect(screen.getByText('Gallery')).toBeInTheDocument();
    });

    it('should have text-dark class with the Gallery text', () => {
      expect(screen.getByText('Gallery')).toHaveClass('text-iron');
    });
  });
});
