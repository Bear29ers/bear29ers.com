import { render, screen, waitFor } from '@testing-library/react';
import '@/hooks/useMediaQuery/useMediaQueryMock';

import useMediaQuery from '@/hooks/useMediaQuery/useMediaQuery';

import { HOME_PROFILE_TEXT } from '@/common/constants/home';

import Intro from './Intro';

import type { RenderResult } from '@testing-library/react';

jest.mock('../../../hooks/useMediaQuery/useMediaQuery.ts');

describe('src/components/ui/Intro/Intro.test.tsx', () => {
  describe('when isClicked props is false', () => {
    let renderResult: RenderResult;

    beforeEach(() => {
      renderResult = render(<Intro isClicked={false} homeProfileText={HOME_PROFILE_TEXT} />);
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
      renderResult = render(<Intro isClicked homeProfileText={HOME_PROFILE_TEXT} />);
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

  describe('introWidth and introHeight tests', () => {
    it('should set introWidth to 240px and introHeight to 480px when screen size is under 399px', async () => {
      (useMediaQuery as jest.Mock).mockImplementation((query: string) => {
        if (query === '(max-width: 399px)') return true;
        return false;
      });

      render(<Intro isClicked homeProfileText={HOME_PROFILE_TEXT} />);

      await waitFor(
        () => {
          const introElement = screen.getByTestId('intro-contents');
          expect(introElement).toHaveStyle({ width: '240px', height: '480px' });
        },
        { timeout: 3800 }
      );
    });

    it('should set introWidth to 320px and introHeight to 480px when screen size is between 399px and 539px', async () => {
      (useMediaQuery as jest.Mock).mockImplementation((query: string) => {
        if (query === '(max-width: 399px)') return false;
        if (query === '(max-width: 539px)') return true;
        return false;
      });

      render(<Intro isClicked homeProfileText={HOME_PROFILE_TEXT} />);

      await waitFor(
        () => {
          const introElement = screen.getByTestId('intro-contents');
          expect(introElement).toHaveStyle({ width: '320px', height: '480px' });
        },
        { timeout: 3800 }
      );
    });

    it('should set introWidth to 384px and introHeight to 576px when screen size is between 539px and 639px', async () => {
      (useMediaQuery as jest.Mock).mockImplementation((query: string) => {
        if (query === '(max-width: 539px)') return false;
        if (query === '(max-width: 639px)') return true;
        return false;
      });

      render(<Intro isClicked homeProfileText={HOME_PROFILE_TEXT} />);

      await waitFor(
        () => {
          const introElement = screen.getByTestId('intro-contents');
          expect(introElement).toHaveStyle({ width: '384px', height: '576px' });
        },
        { timeout: 3800 }
      );
    });

    it('should set introWidth to 500px and introHeight to 576px when screen size is between 639px and 1023px', async () => {
      (useMediaQuery as jest.Mock).mockImplementation((query: string) => {
        if (query === '(max-width: 639px)') return false;
        if (query === '(max-width: 1023px)') return true;
        return false;
      });

      render(<Intro isClicked homeProfileText={HOME_PROFILE_TEXT} />);

      await waitFor(
        () => {
          const introElement = screen.getByTestId('intro-contents');
          expect(introElement).toHaveStyle({ width: '500px', height: '576px' });
        },
        { timeout: 3800 }
      );
    });

    it('should set introWidth to 800px and introHeight to 230px when screen size is between 1023px and 1279px', async () => {
      (useMediaQuery as jest.Mock).mockImplementation((query: string) => {
        if (query === '(max-width: 1023px)') return false;
        if (query === '(max-width: 1279px)') return true;
        return false;
      });

      render(<Intro isClicked homeProfileText={HOME_PROFILE_TEXT} />);

      await waitFor(
        () => {
          const introElement = screen.getByTestId('intro-contents');
          expect(introElement).toHaveStyle({ width: '800px', height: '230px' });
        },
        { timeout: 3800 }
      );
    });

    it('should set introWidth to 1000px and introHeight to 294px when screen size is over 1279px', async () => {
      (useMediaQuery as jest.Mock).mockImplementation(() => false);

      render(<Intro isClicked homeProfileText={HOME_PROFILE_TEXT} />);

      await waitFor(
        () => {
          const introElement = screen.getByTestId('intro-contents');
          expect(introElement).toHaveStyle({ width: '1000px', height: '294px' });
        },
        { timeout: 3800 }
      );
    });
  });
});
