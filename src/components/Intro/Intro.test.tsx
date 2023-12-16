import { render } from '@testing-library/react';

import { HOME_PROFILE_TEXT } from '@/constants/home';

import Intro from './Intro';

describe('src/components/Intro/Intro.test.tsx', () => {
  it('should render three headings', () => {
    const { getAllByRole } = render(<Intro />);
    expect(getAllByRole('heading')).toHaveLength(3);
  });

  it('should render profile picture with alt text', () => {
    const { getByAltText } = render(<Intro />);
    expect(getByAltText(HOME_PROFILE_TEXT.profileAlt)).toBeInTheDocument();
  });
});
