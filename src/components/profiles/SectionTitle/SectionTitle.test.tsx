import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';
import SectionTitle from './SectionTitle';

import type { RenderResult } from '@testing-library/react';

describe('src/components/profiles/SectionTitle/SectionTitle.test.tsx', () => {
  const title = 'Biography';
  let renderResult: RenderResult;

  beforeEach(() => {
    renderResult = render(<SectionTitle title={title} />);
  });

  afterEach(() => {
    renderResult.unmount();
  });

  it('should render the section title with h2 tag', () => {
    expect(screen.getByRole('heading', { level: 2, name: title })).toBeInTheDocument();
  });

  it('should render the section title with h4 tag', () => {
    expect(screen.getByRole('heading', { level: 4, name: title })).toBeInTheDocument();
  });
});
