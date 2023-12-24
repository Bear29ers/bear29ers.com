import { render } from '@testing-library/react';

import SocialIcons from './SocialIcons';

import type { RenderResult } from '@testing-library/react';

describe('src/components/SocialIcons/SocialIcons.test.tsx', () => {
  describe('SocialIcons component with props that isClicked is true', () => {
    let renderResult: RenderResult;

    beforeEach(() => {
      renderResult = render(<SocialIcons isClicked />);
    });

    afterEach(() => {
      renderResult.unmount();
    });

    it('should render the SocialIcons component with four icons', () => {
      expect(renderResult.getAllByRole('link')).toHaveLength(4);
    });

    it('should render the SocialIcons component with span element', () => {
      expect(renderResult.getByTestId('icons-line')).toBeInTheDocument();
    });

    it('should render the SocialIcons component with span element that has bg-iron class', () => {
      expect(renderResult.getByTestId('icons-line')).toHaveClass('bg-iron');
    });
  });

  describe('SocialIcons component with props that isClicked is false', () => {
    let renderResult: RenderResult;

    beforeEach(() => {
      renderResult = render(<SocialIcons isClicked={false} />);
    });

    afterEach(() => {
      renderResult.unmount();
    });

    it('should render the SocialIcons component with four icons', () => {
      expect(renderResult.getAllByRole('link')).toHaveLength(4);
    });

    it('should render the SocialIcons component with span element', () => {
      expect(renderResult.getByTestId('icons-line')).toBeInTheDocument();
    });

    it('should render the SocialIcons component with span element that has bg-dark class', () => {
      expect(renderResult.getByTestId('icons-line')).toHaveClass('bg-dark');
    });
  });
});
