import React from 'react';

import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

import { HOME_PROFILE_TEXT } from '@/common/constants/home';

import Intro from './Intro';

import type { RenderResult } from '@testing-library/react';

describe('src/components/Intro/Intro.test.tsx', () => {
  describe('when isClicked props is false', () => {
    let renderResult: RenderResult;

    beforeEach(() => {
      renderResult = render(<Intro isClicked={false} />);
    });

    afterEach(() => {
      renderResult.unmount();
    });

    it('should not render any headings', async () => {
      await waitFor(() => {
        expect(screen.queryByRole('heading')).not.toBeInTheDocument();
      });
    });

    it('should not render the profile picture', async () => {
      await waitFor(() => {
        expect(screen.queryByAltText(HOME_PROFILE_TEXT.profileAlt)).not.toBeInTheDocument();
      });
    });
  });

  describe('when isClicked props is true', () => {
    let renderResult: RenderResult;

    beforeEach(() => {
      renderResult = render(<Intro isClicked />);
    });

    afterEach(() => {
      renderResult.unmount();
    });

    it('should render three headings', async () => {
      await waitFor(() => {
        expect(screen.getAllByRole('heading')).toHaveLength(3);
      });
    });

    it('should render the heading that has username', async () => {
      await waitFor(() => {
        expect(screen.getByRole('heading', { level: 1, name: RegExp(HOME_PROFILE_TEXT.userName) })).toBeInTheDocument();
      });
    });

    it('should render the heading that has occupation', async () => {
      await waitFor(() => {
        expect(
          screen.getByRole('heading', { level: 2, name: RegExp(HOME_PROFILE_TEXT.occupation) })
        ).toBeInTheDocument();
      });
    });

    it('should render the profile picture with alt text', async () => {
      await waitFor(() => {
        expect(screen.getByAltText(HOME_PROFILE_TEXT.profileAlt)).toBeInTheDocument();
      });
    });
  });
});
