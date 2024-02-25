import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Stats from './Stats';

import type { RenderResult } from '@testing-library/react';

describe('src/components/profiles/Stats/Stats.test.tsx', () => {
  let renderResult: RenderResult;

  beforeEach(() => {
    renderResult = render(<Stats />);
  });

  afterEach(() => {
    renderResult.unmount();
  });

  it('should render the title', () => {
    expect(screen.getByRole('heading', { level: 3, name: /GitHub Stats/ })).toBeInTheDocument();
  });

  it('should render the GitHub Stats image', () => {
    expect(screen.getByRole('img', { name: 'GitHubStats' })).toBeInTheDocument();
  });
});
