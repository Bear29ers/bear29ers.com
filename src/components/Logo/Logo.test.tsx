import { render } from '@testing-library/react';

import Logo from './Logo';

describe('src/components/Logo/Logo.test.tsx', () => {
  it('renders correctly', () => {
    const { container } = render(<Logo />);
    expect(container).toMatchSnapshot();
  });
});
