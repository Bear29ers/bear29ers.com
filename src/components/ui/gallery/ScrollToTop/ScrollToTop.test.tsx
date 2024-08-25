import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import ScrollToTop from './ScrollToTop';

describe('src/components/ui/gallery/ScrollToTop/ScrollToTop.test.tsx', () => {
  it('should render the ScrollToTop component', () => {
    const { getByRole } = render(<ScrollToTop />);
  });
});
