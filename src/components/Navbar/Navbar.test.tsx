import { render } from '@testing-library/react';

import Navbar from './Navbar';

describe('src/components/Navbar/Navbar.test.tsx', () => {
  it('renders correctly', () => {
    const { container } = render(<Navbar />);
    expect(container).toMatchSnapshot();
  });
});
