import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import ArticleProfile from './ArticleProfile';

describe('src/components/ui/articles/ArticleProfile/ArticleProfile.test.tsx', () => {
  it('should render the ArticleProfile component', () => {
    const { getByRole } = render(<ArticleProfile />);
  });
});
