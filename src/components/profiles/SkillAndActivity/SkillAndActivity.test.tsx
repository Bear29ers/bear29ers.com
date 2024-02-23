import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { PROFILE_TEXT } from '@/common/constants/about';

import SkillAndActivity from './SkillAndActivity';

import type { RenderResult } from '@testing-library/react';

const { biographyList } = PROFILE_TEXT;

describe('src/components/profiles/SkillAndActivity/SkillAndActivity.test.tsx', () => {
  let renderResult: RenderResult;

  beforeEach(() => {
    renderResult = render(<SkillAndActivity />);
  });

  afterEach(() => {
    renderResult.unmount();
  });

  it('should render the username', () => {
    expect(screen.getByText(/Bear29ers/)).toBeInTheDocument();
  });

  it('should render the PencilIcon svg', () => {
    expect(screen.getByRole('img', { name: 'PencilIcon' })).toBeInTheDocument();
  });

  it('should render the short greeting sentence', () => {
    expect(screen.getByRole('heading', { level: 3, name: PROFILE_TEXT.shortGreeting })).toBeInTheDocument();
  });

  it('should render the Waving hand animation', () => {
    expect(screen.getByText('👋🏻')).toBeInTheDocument();
  });

  it('should render the title', () => {
    expect(screen.getByRole('heading', { level: 2, name: PROFILE_TEXT.title })).toBeInTheDocument();
  });

  it('should render first paragraph of biography', () => {
    if (!biographyList[0]) {
      it.skip('biographyList[0] is empty or undefined');
    } else {
      const biographyText = screen.getByText(biographyList[0].text);
      expect(biographyText).toBeInTheDocument();
    }
  });

  it('should render second paragraph of biography', () => {
    if (!biographyList[1]) {
      it.skip('biographyList[1] is empty or undefined');
    } else {
      const biographyText = screen.getByText(biographyList[1].text);
      expect(biographyText).toBeInTheDocument();
    }
  });

  it('should render third paragraph of biography', () => {
    if (!biographyList[2]) {
      it.skip('biographyList[2] is empty or undefined');
    } else {
      const biographyText = screen.getByText(biographyList[2].text);
      expect(biographyText).toBeInTheDocument();
    }
  });

  it('should render fourth paragraph of biography', () => {
    if (!biographyList[3]) {
      it.skip('biographyList[3] is empty or undefined');
    } else {
      const biographyText = screen.getByText(biographyList[3].text);
      expect(biographyText).toBeInTheDocument();
    }
  });

  it('should render fifth paragraph of biography', () => {
    if (!biographyList[4]) {
      it.skip('biographyList[4] is empty or undefined');
    } else {
      const biographyText = screen.getByText(biographyList[4].text);
      expect(biographyText).toBeInTheDocument();
    }
  });

  it('should render sixth paragraph of biography', () => {
    if (!biographyList[5]) {
      it.skip('biographyList[5] is empty or undefined');
    } else {
      const biographyText = screen.getByText(biographyList[5].text);
      expect(biographyText).toBeInTheDocument();
    }
  });
});
