import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import InstagramIcon from './InstagramIcon';

describe('src/components/icons/InstagramIcon/InstagramIcon.test.tsx', () => {
  it('should render the InstagramIcon component', () => {
    render(<InstagramIcon />);
    expect(screen.getByRole('img', { name: 'InstagramIcon' })).toBeInTheDocument();
  });
});
