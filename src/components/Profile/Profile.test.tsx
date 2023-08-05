/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/expect-expect */
import { cleanup, render, screen } from '@testing-library/react';

import { ACHIEVEMENTS, PROFILE_TEXT } from '@/constants';

import Profile from './Profile';

import type { RenderResult } from '@testing-library/react';

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

  it('should render LanguagesTools component', () => {
    const { getByTestId } = render(<Profile />);
    expect(getByTestId('languages-tools')).toBeInTheDocument();
  });

  it('should render GitHub Stats image', () => {
    const { getByTestId } = render(<Profile />);
    expect(getByTestId('github-stats')).toBeInTheDocument();
  });

  it('should render GitHub Contributions image', () => {
    const { getByTestId } = render(<Profile />);
    expect(getByTestId('contributions')).toBeInTheDocument();
  });

  describe('biography text', () => {
    const { biographyList } = PROFILE_TEXT;

    beforeEach(() => {
      render(<Profile />);
    });
    afterEach(() => cleanup);

    it('should render first paragraph of biography', () => {
      if (!biographyList[0]) {
        it.skip('biographyList is empty or biographyList[0] is undefined');
      } else {
        const biographyText = screen.getByText(biographyList[0].text);
        expect(biographyText).toBeInTheDocument();
      }
    });

    it('should render second paragraph of biography', () => {
      if (!biographyList[1]) {
        it.skip('biographyList is empty or biographyList[1] is undefined');
      } else {
        const biographyText = screen.getByText(biographyList[1].text);
        expect(biographyText).toBeInTheDocument();
      }
    });

    it('should render third paragraph of biography', () => {
      if (!biographyList[2]) {
        it.skip('biographyList is empty or biographyList[2] is undefined');
      } else {
        const biographyText = screen.getByText(biographyList[2].text);
        expect(biographyText).toBeInTheDocument();
      }
    });

    it('should render fourth paragraph of biography', () => {
      if (!biographyList[3]) {
        it.skip('biographyList is empty or biographyList[3] is undefined');
      } else {
        const biographyText = screen.getByText(biographyList[3].text);
        expect(biographyText).toBeInTheDocument();
      }
    });

    it('should render fifth paragraph of biography', () => {
      if (!biographyList[4]) {
        it.skip('biographyList is empty or biographyList[4] is undefined');
      } else {
        const biographyText = screen.getByText(biographyList[4].text);
        expect(biographyText).toBeInTheDocument();
      }
    });

    it('should render sixth paragraph of biography', () => {
      if (!biographyList[5]) {
        it.skip('biographyList is empty or biographyList[5] is undefined');
      } else {
        const biographyText = screen.getByText(biographyList[5].text);
        expect(biographyText).toBeInTheDocument();
      }
    });
  });

  describe('social media icons', () => {
    let getByTestId: RenderResult['getByTestId'];

    beforeEach(() => {
      const { getByTestId: getByTextIdWrapper } = render(<Profile />);
      getByTestId = getByTextIdWrapper;
    });

    it('should render github icon and valid link', () => {
      const github = getByTestId('github-link');
      if (!github) {
        it.skip('GitHub icon is not displayed');
      } else {
        expect(github).toHaveAttribute('href', SOCIAL_LINK.github);
      }
    });

    it('should render instagram icon and valid link', () => {
      const instagram = getByTestId('instagram-link');
      if (!instagram) {
        it.skip('Instagram icon is not displayed');
      } else {
        expect(instagram).toHaveAttribute('href', SOCIAL_LINK.instagram);
      }
    });

    it('should render threads icon and valid link', () => {
      const threads = getByTestId('threads-link');
      if (!threads) {
        it.skip('Threads icon is not displayed');
      } else {
        expect(threads).toHaveAttribute('href', SOCIAL_LINK.threads);
      }
    });

    it('should render facebook icon and valid link', () => {
      const facebook = getByTestId('facebook-link');
      if (!facebook) {
        it.skip('Facebook icon is not displayed');
      } else {
        expect(facebook).toHaveAttribute('href', SOCIAL_LINK.facebook);
      }
    });
  });
});
