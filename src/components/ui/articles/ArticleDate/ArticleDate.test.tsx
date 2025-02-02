import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import ArticleDate from './ArticleDate';

describe('src/components/ui/articles/ArticleDate/ArticleDate.test.tsx', () => {
  it('should render the ArticleDate component', () => {
    const { getByRole } = render(<ArticleDate />);
  });
});
