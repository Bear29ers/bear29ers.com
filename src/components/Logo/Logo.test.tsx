import { render } from '@testing-library/react';

import Logo from './Logo';

describe('src/components/Logo/Logo.test.tsx', () => {
  it('renders correctly', () => {
    const { getByRole } = render(<Logo />);
    expect(getByRole('link', { name: 'BR' })).toBeInTheDocument();
  });
});
