import { render, screen } from '@testing-library/react';

import ProjectHighlight from './ProjectHighlight';

import type { RenderResult } from '@testing-library/react';

describe('src/components/projects/ProjectHighlight/ProjectHighlight.test.tsx', () => {
  const highlight = 'Dockerize the project';
  let renderResult: RenderResult;

  beforeEach(() => {
    renderResult = render(<ProjectHighlight highlight={highlight} />);
  });

  afterEach(() => {
    renderResult.unmount();
  });

  it('should render the star emoji', () => {
    expect(screen.getByText('🌟')).toBeInTheDocument();
  });

  it('should render a highlight text', () => {
    expect(screen.getByText(highlight)).toBeInTheDocument();
  });
});
