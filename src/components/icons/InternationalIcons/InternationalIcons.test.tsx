import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { JapanIcon, USIcon } from './InternationalIcons';

describe('src/components/icons/InternationalIcons/InternationalIcons.test.tsx', () => {
  it('should render the USIcon component', () => {
    render(<USIcon />);
    expect(screen.getByRole('img', { name: 'USIcon' })).toBeInTheDocument();
  });

  it('should render the JapanIcon component', () => {
    render(<JapanIcon />);
    expect(screen.getByRole('img', { name: 'JapanIcon' })).toBeInTheDocument();
  });
});
