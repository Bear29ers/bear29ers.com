import { render } from '@testing-library/react';

import Navbar from './Navbar';

describe('src/components/Navbar/Navbar.test.tsx', () => {
  it('should be [role=banner]', () => {
    const { getByRole } = render(<Navbar />);
    expect(getByRole('banner')).toBeInTheDocument();
  });
});
