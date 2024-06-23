import { render, screen } from '@testing-library/react';

import FacebookIcon from './FacebookIcon';

describe('src/components/icons/FacebookIcon/FacebookIcon.test.tsx', () => {
  it('should render the FacebookIcon component', () => {
    render(<FacebookIcon />);
    expect(screen.getByRole('img', { name: 'FacebookIcon' })).toBeInTheDocument();
  });
});
