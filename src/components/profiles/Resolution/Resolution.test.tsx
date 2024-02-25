import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { RESOLUTIONS } from '@/common/constants/about';

import Resolution from './Resolution';

import type { RenderResult } from '@testing-library/react';

describe('src/components/profiles/Resolution/Resolution.test.tsx', () => {
  let renderResult: RenderResult;

  beforeEach(() => {
    renderResult = render(<Resolution />);
  });

  afterEach(() => {
    renderResult.unmount();
  });

  it('should render the title', () => {
    expect(screen.getByRole('heading', { level: 3, name: /My Resolution/ })).toBeInTheDocument();
  });

  it('should render the first resolution text', () => {
    if (!RESOLUTIONS[0]) {
      it.skip('RESOLUTIONS[0] is empty or undefined');
    } else {
      const resolution = screen.getByText(RESOLUTIONS[0].text);
      expect(resolution).toBeInTheDocument();
    }
  });

  it('should render the second resolution text', () => {
    if (!RESOLUTIONS[1]) {
      it.skip('RESOLUTIONS[1] is empty or undefined');
    } else {
      const resolution = screen.getByText(RESOLUTIONS[1].text);
      expect(resolution).toBeInTheDocument();
    }
  });

  it('should render the third resolution text', () => {
    if (!RESOLUTIONS[2]) {
      it.skip('RESOLUTIONS[2] is empty or undefined');
    } else {
      const resolution = screen.getByText(RESOLUTIONS[2].text);
      expect(resolution).toBeInTheDocument();
    }
  });

  it('should render the fourth resolution text', () => {
    if (!RESOLUTIONS[3]) {
      it.skip('RESOLUTIONS[3] is empty or undefined');
    } else {
      const resolution = screen.getByText(RESOLUTIONS[3].text);
      expect(resolution).toBeInTheDocument();
    }
  });
});
