import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Loader from './Loader';

describe('src/components/common/Loader/Loader.test.tsx', () => {
  it('should render the correct number of dots by default', () => {
    render(<Loader />);
    const dots = screen.getAllByTestId('dot');
    expect(dots).toHaveLength(5);
  });

  it('should render the correct number of dots when count prop is provided', () => {
    render(<Loader count={3} />);
    const dots = screen.getAllByTestId('dot');
    expect(dots).toHaveLength(3);
  });

  it('applies the correct styles to the container', () => {
    render(<Loader />);
    const container = screen.getByTestId('dot-container');
    expect(container).toHaveStyle({
      display: 'flex',
      gap: '12px',
      height: '60px',
      alignItems: 'center',
    });
  });

  it('applies the correct styles to each dot', () => {
    render(<Loader />);
    const dots = screen.getAllByTestId('dot');
    dots.forEach((dot) => {
      expect(dot).toHaveStyle({
        height: '20px',
        width: '10px',
        backgroundColor: expect.stringMatching(/^#/), // Hexadecimal color
        borderRadius: '20px',
      });
    });
  });
});
