import { render, screen } from '@testing-library/react';

import { SOCIAL_LINK } from '@/constants';

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

  it('should render GitHub icon link is valid', () => {
    const { getByRole } = render(<Navbar />);
    expect(getByRole('link', { description: 'github' })).toHaveAttribute('href', `${SOCIAL_LINK.github}`);
  });

  it('should render Facebook icon link is valid', () => {
    const { getByRole } = render(<Navbar />);
    expect(getByRole('link', { description: 'facebook' })).toHaveAttribute('href', `${SOCIAL_LINK.facebook}`);
  });

  it('should render Instagram icon link is valid', () => {
    const { getByRole } = render(<Navbar />);
    expect(getByRole('link', { description: 'instagram' })).toHaveAttribute('href', `${SOCIAL_LINK.instagram}`);
  });
});
