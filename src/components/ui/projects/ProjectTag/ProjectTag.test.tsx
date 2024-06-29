import { render, screen } from '@testing-library/react';

import ProjectTag from './ProjectTag';

import type { RenderResult } from '@testing-library/react';

describe('src/components/ui/projects/ProjectTag/ProjectTag.test.tsx', () => {
  const tagName = 'HTML';
  let renderResult: RenderResult;

  beforeEach(() => {
    renderResult = render(<ProjectTag tagName={tagName} />);
  });

  afterEach(() => {
    renderResult.unmount();
  });

  it('should render a project tag', () => {
    expect(screen.getByText(tagName)).toBeInTheDocument();
  });
});
