import { render, screen } from '@testing-library/react';

import Period from './Period';

import type { RenderResult } from '@testing-library/react';

describe('src/components/ui/projects/Period/Period.test.tsx', () => {
  const startAt = '2022';
  const endAt = 'current';
  let renderResult: RenderResult;

  beforeEach(() => {
    renderResult = render(<Period startAt={startAt} endAt={endAt} />);
  });

  afterEach(() => {
    renderResult.unmount();
  });

  it('should render the startAt', () => {
    expect(screen.getByText(startAt)).toBeInTheDocument();
  });

  it('should render the endAt', () => {
    expect(screen.getByText(endAt)).toBeInTheDocument();
  });
});
