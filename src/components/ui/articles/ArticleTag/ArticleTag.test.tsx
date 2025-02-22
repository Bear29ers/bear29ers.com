import { render, screen } from '@testing-library/react';

import ArticleTag from './ArticleTag';

import type { RenderResult } from '@testing-library/react';

describe('src/components/ui/articles/ArticleTag/ArticleTag.test.tsx', () => {
  let renderResult: RenderResult;

  beforeEach(() => {
    renderResult = render(<ArticleTag />);
  });

  afterEach(() => {
    renderResult.unmount();
  });

  it('should render the ArticleTag component', () => {
    expect(screen.getByRole('heading', { name: 'ArticleTag' })).toBeInTheDocument();
  });
});
