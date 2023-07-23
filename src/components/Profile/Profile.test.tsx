import { render } from '@testing-library/react';

import { ACHIEVEMENTS, PROFILE_TEXT } from '@/constants';

import Profile from './Profile';

const SOCIAL_LINK = {
  github: 'https://github.com/Bear29ers',
  instagram: 'https://www.instagram.com/bear_27earl',
  threads: 'https://www.threads.net/@bear_27earl',
  facebook: 'https://www.facebook.com/kumakuma1129',
};

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

  describe('biography text', () => {
    it('should render first paragraph of biography', () => {
      const { getByText } = render(<Profile />);
      expect(getByText(PROFILE_TEXT.biographyList[0].text)).toBeInTheDocument();
    });

    it('should render second paragraph of biography', () => {
      const { getByText } = render(<Profile />);
      expect(getByText(PROFILE_TEXT.biographyList[1].text)).toBeInTheDocument();
    });

    it('should render third paragraph of biography', () => {
      const { getByText } = render(<Profile />);
      expect(getByText(PROFILE_TEXT.biographyList[2].text)).toBeInTheDocument();
    });

    it('should render fourth paragraph of biography', () => {
      const { getByText } = render(<Profile />);
      expect(getByText(PROFILE_TEXT.biographyList[3].text)).toBeInTheDocument();
    });

    it('should render fifth paragraph of biography', () => {
      const { getByText } = render(<Profile />);
      expect(getByText(PROFILE_TEXT.biographyList[4].text)).toBeInTheDocument();
    });

    it('should render sixth paragraph of biography', () => {
      const { getByText } = render(<Profile />);
      expect(getByText(PROFILE_TEXT.biographyList[5].text)).toBeInTheDocument();
    });
  });

  describe('social media icons', () => {
    it('should render github icon and valid link', () => {
      const { getByRole } = render(<Profile />);
      expect(getByRole('link', { description: 'github' })).toHaveAttribute('href', SOCIAL_LINK.github);
    });

    it('should render instagram icon and valid link', () => {
      const { getByRole } = render(<Profile />);
      expect(getByRole('link', { description: 'instagram' })).toHaveAttribute('href', SOCIAL_LINK.instagram);
    });

    it('should render threads icon and valid link', () => {
      const { getByRole } = render(<Profile />);
      expect(getByRole('link', { description: 'threads' })).toHaveAttribute('href', SOCIAL_LINK.threads);
    });

    it('should render facebook icon and valid link', () => {
      const { getByRole } = render(<Profile />);
      expect(getByRole('link', { description: 'facebook' })).toHaveAttribute('href', SOCIAL_LINK.facebook);
    });
  });
});
