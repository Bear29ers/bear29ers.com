/* eslint-disable no-unused-expressions */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { type FC } from 'react';

import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

import GalleryIntro from './GalleryIntro';

import type { RenderResult } from '@testing-library/react';

// Framer Motionのモックを改善
jest.mock('framer-motion', () => {
  const ActualReact: typeof React = jest.requireActual('react');

  const MotionDiv: FC<{
    children: React.ReactNode;
    onAnimationComplete?: () => void;
    [key: string]: any;
  }> = ({ children, onAnimationComplete, ...props }) => {
    ActualReact.useEffect(() => {
      // アニメーションの完了をシミュレート
      const timer = setTimeout(() => {
        onAnimationComplete && onAnimationComplete();
      }, 0);
      return () => clearTimeout(timer);
    }, [onAnimationComplete]);

    return (
      <div {...props} data-testid="gallery-intro">
        {children}
      </div>
    );
  };

  const MotionImg: FC<{
    src: string;
    alt: string;
    [key: string]: any;
  }> = ({ src, alt, ...props }) => <img src={src} alt={alt} {...props} />;

  return {
    motion: {
      div: MotionDiv,
      img: MotionImg,
    },
  };
});

describe('src/components/ui/GalleryIntro/GalleryIntro.test.tsx', () => {
  let renderResult: RenderResult;
  const mockProps = {
    mainVisualImageSrc: 'main-visual.jpg',
    layoutId: '17963211944740661',
    mediaList: [
      {
        caption: 'image-1',
        children: {
          data: [
            {
              mediaUrl: 'image-1-child.jpg',
              id: '1-child',
            },
          ],
        },
        mediaUrl: 'image-1.jpg',
        permalink: 'https://www.instagram.com/p/C9bfg4vyXNx/',
        likeCount: 0,
        timestamp: '2024-07-15T04:15:00+0000',
        username: 'bear29ers',
        id: '1',
      },
      {
        caption: 'image-2',
        children: {
          data: [
            {
              mediaUrl: 'image-2-child.jpg',
              id: '2-child',
            },
          ],
        },
        mediaUrl: 'image-2.jpg',
        permalink: 'https://www.instagram.com/p/C9WsRqbyk4Y/',
        likeCount: 3,
        timestamp: '2024-07-13T07:30:00+0000',
        username: 'bear29ers',
        id: '2',
      },
    ],
    setState: jest.fn(),
  };

  beforeEach(() => {
    renderResult = render(<GalleryIntro {...mockProps} />);
  });

  afterEach(() => {
    renderResult.unmount();
  });

  it('should render the GalleryIntro component', () => {
    expect(screen.getByTestId('gallery-intro')).toBeInTheDocument();
  });

  it('should render the main visual', async () => {
    await waitFor(() => {
      expect(screen.getByAltText('main-visual')).toBeInTheDocument();
    });
  });

  it('should render the images', async () => {
    await waitFor(() => {
      expect(screen.getByAltText('1')).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.getByAltText('2')).toBeInTheDocument();
    });
  });

  it('should calls setState when animation completes', async () => {
    await waitFor(() => {
      expect(screen.getByAltText('main-visual')).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(mockProps.setState).toHaveBeenCalled();
    });
  });
});
