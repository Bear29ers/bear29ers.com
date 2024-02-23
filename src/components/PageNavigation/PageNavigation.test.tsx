import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import PageNavigation from './PageNavigation';

describe('src/components/PageNavigation/PageNavigation.test.tsx', () => {
  it('should render the PageNavigation component', () => {
    const { getByRole } = render(<PageNavigation />);
  });
});
