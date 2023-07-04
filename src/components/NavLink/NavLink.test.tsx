import { render } from '@testing-library/react';

import NavLink from './NavLink';

describe('src/components/NavLink/NavLink.test.tsx', () => {
  it('renders correctly', () => {
    const { getByRole } = render(<NavLink href="/" title="Home" />);
    expect(getByRole('link', { name: 'Home' })).toBeInTheDocument();
  });
});
