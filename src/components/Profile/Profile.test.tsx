import { render } from '@testing-library/react';

import { ACHIEVEMENTS, PROFILE_TEXT } from '@/constants';

import Profile from './Profile';

describe('src/components/Profile/Profile.test.tsx', () => {
  it('should render Profile component', () => {
    const { getByRole } = render(<Profile />);
    expect(getByRole('grid')).toBeInTheDocument();
  });

  it('should render profile picture with alt text', () => {
    const { getByAltText } = render(<Profile />);
    expect(getByAltText(PROFILE_TEXT.userName)).toBeInTheDocument();
  });

  it('should render full name and username', () => {
    const { getByText } = render(<Profile />);
    expect(getByText(PROFILE_TEXT.fullName)).toBeInTheDocument();
    expect(getByText(PROFILE_TEXT.userName)).toBeInTheDocument();
  });

  it('should render three achievements', () => {
    const { getAllByRole } = render(<Profile />);
    expect(getAllByRole('img', { name: /Achievement:/ })).toHaveLength(ACHIEVEMENTS.length);
  });
});
