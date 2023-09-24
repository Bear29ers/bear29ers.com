import { render } from '@testing-library/react';

import { TOP_PROFILE_TEXT } from '@/constants/top';

import ProfileCard from './ProfileCard';

describe('src/components/ProfileCard/ProfileCard.test.tsx', () => {
  it('should render profile picture with alt text', () => {
    const { getByAltText } = render(<ProfileCard />);
    expect(getByAltText(TOP_PROFILE_TEXT.altText)).toBeInTheDocument();
  });

  it('should render first and last name as heading', () => {
    const { getByText } = render(<ProfileCard />);
    expect(getByText(TOP_PROFILE_TEXT.firstName)).toBeInTheDocument();
    expect(getByText(TOP_PROFILE_TEXT.lastName)).toBeInTheDocument();
  });

  it('should render email', () => {
    const { getByText } = render(<ProfileCard />);
    expect(getByText(TOP_PROFILE_TEXT.email)).toBeInTheDocument();
  });

  it('should render occupation', () => {
    const { getByText } = render(<ProfileCard />);
    expect(getByText(TOP_PROFILE_TEXT.occupation)).toBeInTheDocument();
  });
});
