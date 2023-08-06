import { render } from '@testing-library/react';

import Logo from './Logo';

describe('src/components/Logo/Logo.test.tsx', () => {
  it('should render Logo component that is [role=link] with name BR', () => {
    const { getByRole } = render(<Logo />);
    expect(getByRole('link', { name: 'BR' })).toBeInTheDocument();
  });
});
