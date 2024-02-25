import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Footer from './Footer';

describe('src/components/Footer/Footer.test.tsx', () => {
  it('should render the Footer component', () => {
    const { getByRole } = render(<Footer />);
  });
});
