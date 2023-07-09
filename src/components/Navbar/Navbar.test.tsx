import { render, screen } from '@testing-library/react';

import Navbar from './Navbar';

describe('src/components/Navbar/Navbar.test.tsx', () => {
  it('should render Navbar component that is [role=banner]', () => {
    const { getByRole } = render(<Navbar />);
    expect(getByRole('banner')).toBeInTheDocument();
  });

  it('should render Navbar component that have two [role=navigation]', () => {
    const { getAllByRole } = render(<Navbar />);
    expect(getAllByRole('navigation')).toHaveLength(2);
  });

  it('should render Navbar component with two nav tags', () => {
    render(<Navbar />);
    const navElements = screen.getAllByRole('navigation');
    navElements.map((element) => expect(element).toBeInTheDocument());
  });
});
