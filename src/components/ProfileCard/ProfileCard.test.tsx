import { render } from '@testing-library/react';

import { HOME_PROFILE_TEXT } from '@/constants/home';

import ProfileCard from './ProfileCard';

describe('src/components/ProfileCard/ProfileCard.test.tsx', () => {
  it('should render profile picture with alt text', () => {
    const { getByAltText } = render(<ProfileCard />);
    expect(getByAltText(HOME_PROFILE_TEXT.altText)).toBeInTheDocument();
  });

  it('should render first and last name as heading', () => {
    const { getByText } = render(<ProfileCard />);
    expect(getByText(HOME_PROFILE_TEXT.firstName)).toBeInTheDocument();
    expect(getByText(HOME_PROFILE_TEXT.lastName)).toBeInTheDocument();
  });

  it('should render email', () => {
    const { getByText } = render(<ProfileCard />);
    expect(getByText(HOME_PROFILE_TEXT.email)).toBeInTheDocument();
  });

  it('should render occupation', () => {
    const { getByText } = render(<ProfileCard />);
    expect(getByText(HOME_PROFILE_TEXT.occupation)).toBeInTheDocument();
  });
});
