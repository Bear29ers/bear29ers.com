import { render } from '@testing-library/react';

import Footer from './Footer';

describe('src/components/Footer/Footer.test.tsx', () => {
  it('should render Footer component', () => {
    const { getByRole } = render(<Footer />);
    expect(getByRole('contentinfo')).toBeInTheDocument();
  });

  it('should render Footer component with two span tags', () => {
    const { container } = render(<Footer />);
    expect(container.querySelectorAll('span')).toHaveLength(2);
  });
});
