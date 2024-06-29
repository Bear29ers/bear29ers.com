import { render, screen } from '@testing-library/react';

import { AMBITIONS } from '@/constants/about';

import Ambition from './Ambition';

import type { RenderResult } from '@testing-library/react';

describe('src/components/profiles/Ambition/Ambition.test.tsx', () => {
  let renderResult: RenderResult;

  beforeEach(() => {
    renderResult = render(<Ambition />);
  });

  afterEach(() => {
    renderResult.unmount();
  });

  it('should render the first resolution text', () => {
    if (!AMBITIONS[0]) {
      it.skip('RESOLUTIONS[0] is empty or undefined');
    } else {
      const resolution = screen.getByText(AMBITIONS[0].text);
      expect(resolution).toBeInTheDocument();
    }
  });

  it('should render the second resolution text', () => {
    if (!AMBITIONS[1]) {
      it.skip('RESOLUTIONS[1] is empty or undefined');
    } else {
      const resolution = screen.getByText(AMBITIONS[1].text);
      expect(resolution).toBeInTheDocument();
    }
  });

  it('should render the third resolution text', () => {
    if (!AMBITIONS[2]) {
      it.skip('RESOLUTIONS[2] is empty or undefined');
    } else {
      const resolution = screen.getByText(AMBITIONS[2].text);
      expect(resolution).toBeInTheDocument();
    }
  });

  it('should render the fourth resolution text', () => {
    if (!AMBITIONS[3]) {
      it.skip('RESOLUTIONS[3] is empty or undefined');
    } else {
      const resolution = screen.getByText(AMBITIONS[3].text);
      expect(resolution).toBeInTheDocument();
    }
  });
});
